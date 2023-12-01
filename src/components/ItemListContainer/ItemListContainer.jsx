import { Box } from "@mui/material"

const ItemListContainer = ({greeting}) => {
  return (
    <Box component={'main'}>
      <h2> {greeting}</h2>
      {/* Para probar el efecto del navBar */}
      <Box height={'200vh'}></Box>
    </Box>
  )
}

export default ItemListContainer