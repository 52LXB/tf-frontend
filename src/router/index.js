import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import login from '@/pages/login/index'
import loginForgetPassword from '@/pages/login/forget-password'
import loginResetPassword from '@/pages/login/reset-password'
import join from '@/pages/join/index'
import joinInstitutionSignUp from '@/pages/join/institution/sign-up'
import joinInstitutionSource from '@/pages/join/institution/source'
import joinCandidateSignUp from '@/pages/join/candidate/sign-up'
import joinCandidateSource from '@/pages/join/candidate/source'
import joinCandidateCertificate from '@/pages/join/candidate/certificate'
import joinCheckEmail from '@/pages/join/check-email'
import joinReview from '@/pages/join/review'
import candidateCenter from '@/pages/center/candidate/index'
import candidateCenterResume from '@/pages/center/candidate/resume/index'            // [简历主页]
import candidateCenterResumeBasic from '@/pages/center/candidate/resume/basic'       // [简历基础信息]
import candidateCenterResumeObjective from '@/pages/center/candidate/resume/objective'    // [简历objective]
import candidateCenterResumeEducation from '@/pages/center/candidate/resume/education'    // [简历教育背景]
import candidateCenterResumeExperience from '@/pages/center/candidate/resume/experience'  // [简历工作经历]
import candidateCenterResumeCertificate from '@/pages/center/candidate/resume/certificate'  // [简历技能技术]
import candidateCenterResumePreview from '@/pages/center/candidate/resume/preview'         // [简历预览]
import institutionCenter from '@/pages/center/institution/index'
import institutionCenterEdit from '@/pages/center/institution/edit'
import institutionCenterPreview from '@/pages/center/institution/preview'
import job from '@/pages/job/index'      // [职位主页]
import jobPreview from '@/pages/job/preview'      // [职位预览页]
import jobShow from '@/pages/job/show'      // [职位展示页]
import candidates from '@/pages/candidates/index'      // [推荐教师主页]

import demo from '@/pages/demo'

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
      path: '/join/institution/source',
      name: 'join-institution-source',
      component: joinInstitutionSource
    },
    {
      path: '/join/candidate/sign-up',
      name: 'join-candidate-sign-up',
      component: joinCandidateSignUp
    },
    {
      path: '/join/candidate/certificate',
      name: 'join-candidate-certificate',
      component: joinCandidateCertificate
    },
    {
      path: '/join/candidate/source',
      name: 'join-candidate-source',
      component: joinCandidateSource
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
      path: '/center/candidate/resume/education',
      name: 'candidate-center-resume-education',
      component: candidateCenterResumeEducation
    },
    {
      path: '/center/candidate/resume/experience',
      name: 'candidate-center-resume-experience',
      component: candidateCenterResumeExperience
    },
    {
      path: '/center/candidate/resume/certificate',
      name: 'candidate-center-resume-certificate',
      component: candidateCenterResumeCertificate
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
      path: '/job',
      name: 'job',
      component: job
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
      path: '/candidates',
      name: 'candidates',
      component: candidates
    },
    {
      path: '/demo',
      name: 'demo',
      component: demo
    }
  ]
})
