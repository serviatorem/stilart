export function useAPI () {
  return {
    async getPortfolio () {
      const res = await fetch('https://admin.stilart-design.ru/api/Portfolios?populate=*', {
        method: 'GET'
      })
      return res.json()
    },
    async postPortfolio (name:string, email:string, phone:string) {
      const res = await fetch('https://admin.stilart-design.ru/api/Clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // Добавьте любые другие необходимые заголовки, такие как авторизация
        },
        body: JSON.stringify(
          {
            data: {
              name:name,
              email:email,
              phone:phone
            }
          }
        )
      })
      return res.status
    }
  }
}
