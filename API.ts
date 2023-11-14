export function useAPI () {
  return {
    async getPortfolio () {
      const res = await fetch('http://213.171.5.143:1337/api/Portfolios?populate=*', {
        method: 'GET'
      })
      return res.json()
    }
  }
}
