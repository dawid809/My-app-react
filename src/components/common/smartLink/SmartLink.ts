export function linkSmart(link: string): string {
    let linkNew = link;
    if (!link.includes("http")) {
      const host = window.location.host;
      linkNew = `http://${host}/${link}`;
    }
    return linkNew;
  }