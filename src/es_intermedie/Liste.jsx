import React from 'react'

const Liste = () => {

const lingue = ['JS', 'Python', 'Java']

  return (
    <div>
        <h3>Lingue presenti</h3>
        <ul>
            {lingue.map(
                (p,i) => (
                    <li key={i}>
                        {p}
                    </li>
                )
            )}
        </ul>
    </div>
  )
}

export default Liste