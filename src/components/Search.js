// import React, { useState } from 'react'

// export const Search = () => {
//   const [value, setValue] = useState('')

//   const onSubmit = (event) => {
//     if (event.key !== 'Enter') {
//       return
//     }

//     if (value.trim()) {
//       alert.hide()
//       swapi.search(value.trim())
//     } else {
//       alert.show('Enter user date!')
//     }
//   }

//   return (
//     <div className="form-group">
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Enter name of planet"
//         onKeyPress={onSubmit}
//         value={value}
//         onChange={(event) => setValue(event.target.value)}
//       />
//     </div>
//   )
// }
