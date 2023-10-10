export interface CustomResponse {
    status: 'success' | 'error'
    message: string
    data?: any
    error?: any
}