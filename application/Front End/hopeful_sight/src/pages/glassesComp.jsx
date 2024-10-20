import { useParams } from 'react-router-dom'

export function Glasses() {
  const { id } = useParams();
  return <p>Glasses id: {id}</p>;
}

try {
  <Route path = "/Cart" element = {<Cart />} />
} catch (error) {
  <Route path="*" element={<errorNotFound />} />

}
