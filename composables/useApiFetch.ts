export const useApiFetch = (url:string, opts = []) => {

    let token = useCookie('token')

    const config = useRuntimeConfig()

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
        baseURL: config.public.apiBase,
        headers: { ...headers },
    })
}