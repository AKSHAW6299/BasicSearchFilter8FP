import React, { useEffect, useState } from 'react'
import { getApiData } from './services/dummyApi'

function App() {
  const [apiData, setApiData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetchData()
  }, [])
  const fetchData = async () => {
    const response = await getApiData()
    setApiData(response?.data)
  }

  const filterData = apiData.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <div className='input'>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Filter Title' />
      </div>
      <div className='p-5'>
        <table border="1" cellPadding="5">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>User ID</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {
              filterData.length === 0 ? (<p className='ml-5 mt-2'>No data found</p>) :
                (filterData.map((item, index) => (
                  <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.userId}</td>
                    <td>{item.body}</td>
                  </tr>
                )))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
