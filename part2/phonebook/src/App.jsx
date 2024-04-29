import { useEffect, useState } from 'react'
import axios from 'axios'
import { Title } from "./components/Title"


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('') // Nuevo estado para el filtro
  
  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      setPersons(response.data)
    })
  },[])

  const manejarCambio = (evento) => {
    let igual = persons.filter((objeto) => { return objeto.name === evento.target.value })
    if (igual.length > 0) {
      window.alert(`${igual[0].name} esta ya añadido a la lista`)
    } else {
      setNewName(evento.target.value);
    }
  }

  const manejarNumero = (evento) => {
    setNewNumber(evento.target.value)
  }

  const manejarFiltro = (evento) => {
    setFilter(evento.target.value) // Actualiza el estado del filtro
  }

  const clickSobreEl = (evento) => {
    evento.preventDefault();
    const nuevaPersona = { name: newName, number: newNumber }
    setPersons([...persons, nuevaPersona])
    setNewName('');
  }

  const personsToShow = filter
    ? persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase())) // Filtra las personas que coinciden con el filtro
    : persons

  return (
    <div>
      <Title text={"Phonebook"} />
      <div>
        filter shown whit: <input value={filter} onChange={manejarFiltro} />
      </div>
      <Title text={"add new"} />
      <form>
        <div>
          name: <input value={newName} onChange={manejarCambio} />
        </div>
        <div>
          number: <input value={newNumber} onChange={manejarNumero} />
        </div>
        <div>
          <button type="submit" onClick={clickSobreEl}>add</button>
        </div>
      </form>
      <Title text={"Numbers"} />
      {personsToShow.map((person) => (
        <p key={person.name}>{person.name} {person.number}</p>
      ))}
    </div>
  )
}

export default App
