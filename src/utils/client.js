/* eslint-disable import/prefer-default-export */
import axios from 'axios'

export const fetchWorksData = async () => {
  const response = await axios('./data/works.json')

  return response ? response.data : null
}
