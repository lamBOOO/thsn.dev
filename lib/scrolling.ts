export function scrollToIdNoUrlChange(id: string) {
  if (typeof window !== "undefined") {
    const anchor = document.getElementById(id);
    if (anchor === null) {
      // alert("error")
    } else {
      anchor.scrollIntoView(true)
    }
  }
}
