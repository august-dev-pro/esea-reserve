// SkeletonHeader.tsx
export function SkeletonHeader() {
  return <div className="w-full h-16 bg-gray-200 animate-pulse" />;
}

// SkeletonHero.tsx
export function SkeletonHero() {
  return <div className="w-full h-64 bg-gray-200 animate-pulse my-4" />;
}

// SkeletonServiceList.tsx
export function SkeletonServiceList() {
  return (
    <div className="space-y-4">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div key={index} className="h-20 bg-gray-200 animate-pulse rounded" />
        ))}
    </div>
  );
}

// SkeletonFooter.tsx
export function SkeletonFooter() {
  return <div className="w-full h-24 bg-gray-200 animate-pulse mt-4" />;
}

// SkeletonSearchBar.tsx
export function SkeletonSearchBar() {
  return <div className="w-full h-12 bg-gray-200 animate-pulse my-4 rounded" />;
}

// SkeletonServiceCard.tsx
export function SkeletonServiceCard() {
  return (
    <div className="space-y-4">
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div key={index} className="h-24 bg-gray-200 animate-pulse rounded" />
        ))}
    </div>
  );
}

// SkeletonTextBlock.tsx
export function SkeletonTextBlock() {
  return (
    <div className="space-y-4">
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div key={index} className="h-6 bg-gray-200 animate-pulse rounded" />
        ))}
    </div>
  );
}
// SkeletonForm.tsx
export function SkeletonForm() {
  return (
    <div className="space-y-4">
      {Array(4)
        .fill("")
        .map((_, index) => (
          <div key={index} className="h-12 bg-gray-200 animate-pulse rounded" />
        ))}
    </div>
  );
}
// SkeletonContactForm.tsx
export function SkeletonContactForm() {
  return (
    <div className="space-y-4">
      {Array(3)
        .fill("")
        .map((_, index) => (
          <div key={index} className="h-12 bg-gray-200 animate-pulse rounded" />
        ))}
    </div>
  );
}
