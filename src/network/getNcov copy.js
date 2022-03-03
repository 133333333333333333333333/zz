import axios from 'axios'
import { request } from './request'

const base = {
  juheBaseUrl: '/api',
  spaingTravel: '/springTravel/citys'
}

export function getNcov() {
  return request ({
    url: '/ncov/index',
      params: {
        key: "ed9da391ac9627a4bad31027e8bb2c16"
      }
  })
}

export function getNocCity() {
  return axios({
    url: 'https://ap.muxiaogou.cn/api/epidemic?type=epidemicInfectionData'
  })
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