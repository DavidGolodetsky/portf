import { useContext } from '@nuxtjs/composition-api'

export default () => {
  const { app, error } = useContext()

  const getSbData = (startsWith) => {
    return app.$storyapi
      .get('cdn/stories', {
        starts_with: `${startsWith}/`,
        version: 'draft',
      })
      .then((res) => {
        return res.data
      })
      .catch((res) => {
        if (!res.response) {
          console.error(res)
          error({
            statusCode: 404,
            message: 'Failed to receive content form api',
          })
        } else {
          console.error(res.response.data)
          error({
            statusCode: res.response.status,
            message: res.response.data,
          })
        }
      })
  }
  return {
    getSbData,
  }
}
