import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import login from '@/pages/login/index'
import loginForgetPassword from '@/pages/login/forget-password'
import loginResetPassword from '@/pages/login/reset-password'
import join from '@/pages/join/index'                                     // [注册主页]
import joinInstitutionSignUp from '@/pages/join/institution/sign-up'      // [机构注册]
import joinCandidateSignUp from '@/pages/join/candidate/sign-up'          // [求职者注册]
import joinCheckEmail from '@/pages/join/check-email'                     // [邮箱验证]
import joinReview from '@/pages/join/review'                              // [等待审核]
import candidateCenter from '@/pages/center/candidate/index'              // [个人中心]
import candidateCenterOverview from '@/pages/center/candidate/overview'   // [个人中心概览]
import candidateCenterResume from '@/pages/center/candidate/resume/index'            // [简历主页]
import candidateCenterResumeBasic from '@/pages/center/candidate/resume/basic'       // [简历基础信息]
import candidateCenterResumeObjective from '@/pages/center/candidate/resume/objective'    // [简历objective]
import candidateCenterResumePreview from '@/pages/center/candidate/resume/preview'         // [简历预览]
import institutionCenter from '@/pages/center/institution/index'               // [机构中心]
import institutionCenterEdit from '@/pages/center/institution/edit'           // [机构信息编辑]
import institutionCenterPreview from '@/pages/center/institution/preview'    // [机构信息预览]
import institutionCenterOverview from '@/pages/center/institution/overview' // [机构预览]
import job from '@/pages/job/index'                 // [职位主页]
import jobCreate from '@/pages/job/create'         // [职位新建]
import jobPreview from '@/pages/job/preview'      // [职位预览页]
import jobShow from '@/pages/job/show'           // [职位展示页]
import jobManagement from '@/pages/job/management'     // [职位展示页]
import jobConsult from '@/pages/job/consult'          // [职位咨询]
import jobReview from '@/pages/job/review'          // [职位等待审核]
import candidates from '@/pages/candidates/index'    // [推荐教师主页]

import demo from '@/pages/demo'
import demo2 from '@/pages/demo2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login/forget-password',
      name: 'login-forget-password',
      component: loginForgetPassword
    },
    {
      path: '/login/reset-password',
      name: 'login-reset-password',
      component: loginResetPassword
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/join/institution/sign-up',
      name: 'join-institution-sign-up',
      component: joinInstitutionSignUp
    },
    {
      path: '/join/candidate/sign-up',
      name: 'join-candidate-sign-up',
      component: joinCandidateSignUp
    },
    {
      path: '/join/check-email',
      name: 'join-check-email',
      component: joinCheckEmail
    },
    {
      path: '/join/review',
      name: 'join-review',
      component: joinReview
    },
    {
      path: '/center/candidate',
      name: 'candidate-center',
      component: candidateCenter
    },
    {
      path: '/center/candidate/overview',
      name: 'candidate-center-overview',
      component: candidateCenterOverview
    },
    {
      path: '/center/candidate/resume',
      name: 'candidate-center-resume',
      component: candidateCenterResume
    },
    {
      path: '/center/candidate/resume/basic',
      name: 'candidate-center-resume-basic',
      component: candidateCenterResumeBasic
    },
    {
      path: '/center/candidate/resume/objective',
      name: 'candidate-center-resume-objective',
      component: candidateCenterResumeObjective
    },
    {
      path: '/center/candidate/resume/preview',
      name: 'candidate-center-resume-preview',
      component: candidateCenterResumePreview
    },
    {
      path: '/center/institution',
      name: 'institution-center',
      component: institutionCenter
    },
    {
      path: '/center/institution/edit',
      name: 'institution-center-edit',
      component: institutionCenterEdit
    },
    {
      path: '/center/institution/preview',
      name: 'institution-center-preview',
      component: institutionCenterPreview
    },
    {
      path: '/center/institution/overview',
      name: 'institution-center-overview',
      component: institutionCenterOverview
    },
    {
      path: '/job',
      name: 'job',
      component: job
    },
    {
      path: '/job/create',
      name: 'job-create',
      component: jobCreate
    },
    {
      path: '/job/preview',
      name: 'job-preview',
      component: jobPreview
    },
    {
      path: '/job/show',
      name: 'job-show',
      component: jobShow
    },
    {
      path: '/job/management',
      name: 'job-management',
      component: jobManagement
    },
    {
      path: '/job/consult',
      name: 'job-consult',
      component: jobConsult
    },
    {
      path: '/job/review',
      name: 'job-review',
      component: jobReview
    },
    {
      path: '/candidates',
      name: 'candidates',
      component: candidates
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2
    }
  ]
})
