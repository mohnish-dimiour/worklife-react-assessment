import { SERVICE_URL } from "../../utils/constants/url.constants"
import { replaceUrl } from "../../utils/helpers"
import { AppClient } from "../../utils/network"


export const getTodosService = () => {
    return AppClient({ url: SERVICE_URL.GET_TODOS })
}

export const deleteTodoService = (id) => {
    return AppClient({ url: replaceUrl(SERVICE_URL.DELETE_TODO, { id }) })
}

export const updateTodoService = (id, data) => {
    return AppClient({ url: replaceUrl(SERVICE_URL.EDIT_TODO, { id }), data })

}

export const createTodoService = (data) => {
    return AppClient({ url: SERVICE_URL.CREATE_TODO, data })
}