import { instance } from './index.js'
const api = instance()

// 내 정보 가져오는 함수
function getMyInfo(params) {
  return new Promise((resolve, reject) => {
    api
      .get(`api/members/me`)
      .then((response) => {
        // 여기서 필요한 처리를 수행합니다.
        resolve(response.data) // 예시: 성공 시 데이터를 resolve합니다.
      })
      .catch((error) => {
        // 에러 처리
        reject(error) // 에러를 reject합니다.
      })
  })
}

// 내 정보 수정하는 함수
function editMyInfo(params) {
  return new Promise((resolve, reject) => {
    api
      .put(`api/members/me`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 회원탈퇴
function withdrawal(params) {
  return new Promise((resolve, reject) => {
    api
      .delete(`api/members/me`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
// 대시보드 정보 가져오는 함수
function getDashBoardInfo(params) {
  return new Promise((resolve, reject) => {
    api
      .get(`api/members/me/dashboard`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 내 주간 일정 가져오는 함수
function getWeeklySchedule(params) {
  return new Promise((resolve, reject) => {
    api
      .get(`members/me/study-timeline`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 내 스터디 목록 조회
function getStudyList(params) {
  return new Promise((resolve, reject) => {
    api
      .get(`/members/me/studies`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 내 노트 목록 조회
function getNoteList(params) {
  return new Promise((resolve, reject) => {
    api
      .get(`/members/me/notes`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 리마인드퀴즈 조회
function getQuizList(params) {
  return new Promise((resolve, reject) => {
    api
      .get(`/members/me/remind-quiz`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 내 스터디 미팅 일정
function getMeetingSchedule(params) {
  return new Promise((resolve, reject) => {
    api
      .get(`/members/me/meetings`)
      .then((response) => {
        resolve(response.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export {
  getDashBoardInfo,
  getWeeklySchedule,
  withdrawal,
  editMyInfo,
  getMyInfo,
  getStudyList,
  getNoteList,
  getQuizList
}
