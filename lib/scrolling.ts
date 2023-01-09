export function scrollToIdNoUrlChange(id: string, opts : any) {
  if (typeof window !== "undefined") {
    const anchor = document.getElementById(id);
    if (anchor === null) {
    } else {
      anchor.scrollIntoView(opts)
    }
  }
}
