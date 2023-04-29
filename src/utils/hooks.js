import { useParams } from 'react-router-dom'

/**
 * Get user id as a number from URL
 * @param { String } key Property of useParams() as a string (default: 'id')
 * @return { (Number | null) } User id as an integer
 */
export default function useParamsInt(key = 'id') {
  const params = useParams()
  return params[key] ? parseInt(params[key]) : null
}
