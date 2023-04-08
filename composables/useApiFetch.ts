export const useApiFetch = (url:string, opts = []) => {

    let token = useCookie('token')

    const headers = {
        Authorization:'',
        Project: ''
    }

    if (token.value)
    {
        headers['Authorization'] = 'Bearer '+ token.value
    }

    headers['Project'] = useRuntimeConfig().public.projectHash

    console.log(url)
    return useFetch(url, {
        ...opts,
        baseURL: 'http://127.0.0.1:3333/api/',
        headers: { ...headers },
    })
}