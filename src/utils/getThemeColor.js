
const getThemeColor = () => {
    const theme = typeof window !== "undefined" && window.__theme     // o typeof é necessario essa verificacao no gatsby para nao quebrar no build . vai verificar se o window é diferente ! de undefined , pq no terminal ele nao encontraria o windows.theme entao na compilacao o typeof ignora a resposta de undefined e segue a compilacao
  
    if (theme === "light") return "#edeef0"
    if (theme === "dark") return "#231336"
  }
  
  export default getThemeColor