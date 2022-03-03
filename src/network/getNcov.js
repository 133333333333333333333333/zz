import axios from "axios"
import { request } from "./request"

const base = {
  juheBaseUrl: '/api',
  springTravel: '/springTravel/citys'
}

export function getNcov() {
  return request(
    {
      url: '/ncov/index',
      params: {
        key: "ed9da391ac9627a4bad31027e8bb2c16"
      }
    }
  )
}
export function getNcovCity() {
  return axios(
    {
      url: 'https://api.muxiaoguo.cn/api/epidemic?type=epidemicInfectionData',

    }
  )
}
export function getWorldNcov() {
  return request(
    {
      url: '/ncovabroad/index',
      params: {
        key: "ed9da391ac9627a4bad31027e8bb2c16"
      }
    }
  )
}
export function getCityTravel(parmas) {
  return axios.get(base.juheBaseUrl + base.springTravel,{
    parmas
  })
}
