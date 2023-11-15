export function useAPI () {
  return {
    async getPortfolio () {
      const res = await fetch('https://admin.stilart-design.ru/api/Portfolios?populate=*', {
        method: 'GET'
      })
      return res.json()
    }
  }
}
