import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  isRejectedWithValue,
} from "@reduxjs/toolkit";
import { API_URL } from "@/ui/api";

interface EmailCredentials {
  email: string;
  password: string;
}

interface PhoneCredentials {
  phoneNumber: string;
  password: string;
}

type Credentials = EmailCredentials | PhoneCredentials;

interface AuthState {
  token: string | null;
  user: {
    userId: string;
    email: string;
    role: string;
    profilImage: string;
  } | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
};

// Thunk pour gérer la connexion
export const login = createAsyncThunk<string, Credentials>(
  "auth/login",
  async (credentials: Credentials) => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    if (!response.ok) {
      const errorResponse = await response.json();
      console.log("fzefefrferferferferferf: ", errorResponse);

      // Si l'erreur n'est pas au format JSON, on peut gérer ça ici
      if (errorResponse.message) {
        return isRejectedWithValue();
      } else {
        throw new Error(`${errorResponse.stack.message}`);
      }
    }

    const result = await response.json();
    localStorage.setItem("token", result.token);
    if (!result.token) {
      throw new Error("Token is missing in the response");
    }
    return result.token;
  }
);

export const logoutThunk = createAsyncThunk<void, void>(
  "auth/logoutThunk",
  async (_, { dispatch }) => {
    try {
      const response = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include", // Envoie les cookies avec la requête
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.log("Error:", errorText);
        throw new Error(
          `${response.status} ${response.statusText}: ${errorText}`
        );
      }
      // Si la réponse ne contient pas de corps, on peut ne pas parser en JSON
      const result = await response.json().catch(() => ({})); // Défaut en objet vide si JSON échoue
      // Appel de l'action logout après une déconnexion réussie
      dispatch(logout());
      return result;
    } catch (error) {
      console.error("Logout error:", error);
      throw error; // Lancer l'erreur pour qu'elle puisse être traitée par le middleware
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthState["user"]>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.token = action.payload;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", action.payload);
        }

        const decodedUser = JSON.parse(atob(action.payload.split(".")[1]));
        state.user = decodedUser;

        state.loading = false;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error.message || "Failed to login";
        state.loading = false;
      });
  },
});

// Thunk pour initialiser le token depuis le localStorage
export const initializeAuth = () => (dispatch: any) => {
  if (typeof window !== "undefined") {
    const tokenFromStorage = localStorage.getItem("token");

    if (tokenFromStorage) {
      try {
        // Décoder le payload du token (la partie entre les deux points)
        const decodedToken = JSON.parse(atob(tokenFromStorage.split(".")[1]));

        // Vérifier si le token a expiré
        const currentTime = Math.floor(Date.now() / 1000); // Heure actuelle en secondes
        if (decodedToken.exp && decodedToken.exp > currentTime) {
          // Le token est encore valide
          dispatch(authSlice.actions.setToken(tokenFromStorage));
          dispatch(authSlice.actions.setUser(decodedToken));
        } else {
          // Le token a expiré, le supprimer
          localStorage.removeItem("token");
          console.warn("Token expiré. Déconnexion nécessaire.");
          dispatch(authSlice.actions.logout()); // Action de déconnexion dans Redux
        }
      } catch (error) {
        console.error("Erreur lors du décodage du token:", error);
        localStorage.removeItem("token");
      }
    }
  }
};

export const { setToken, setUser, logout } = authSlice.actions;
export default authSlice.reducer;
