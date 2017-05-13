export function getUserInfo(data, provider) {
  let name
  let avatar

  if (provider === 'google') {
    name = `${data.given_name} ${data.family_name}`
    avatar = data.picture
  } else if (provider === 'facebook') {
    name = data.name
    avatar = data.picture.data.url
  }

  return {
    providerId: data.id,
    name,
    avatar,
    email: data.email,
    provider,
  }
}
