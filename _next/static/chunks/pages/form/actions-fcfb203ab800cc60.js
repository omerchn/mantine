(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4536],{79942:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/actions",function(){return r(10405)}])},10405:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return a}});var o=r(52322),s=r(45392),i=r(79016),t=r(33638);let c=(0,i.A)(t.us.formActions);function l(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["Form actions allow changing state of the form from anywhere in your application.\nThe mechanism of form actions is similar to ",(0,o.jsx)(n.a,{href:"/x/notifications/",children:"notifications system"}),",\n",(0,o.jsx)(n.a,{href:"/x/modals/",children:"modals manager"})," and other similar packages."]}),"\n",(0,o.jsxs)(n.p,{children:["To use form actions, set ",(0,o.jsx)(n.code,{children:"name"})," property in ",(0,o.jsx)(n.a,{href:"/form/use-form/",children:"use-form"})," settings:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nexport interface DemoFormValues {\n  name: string;\n  age: number;\n}\n\nfunction Demo() {\n  const form = useForm<DemoFormValues>({\n    mode: 'uncontrolled',\n    name: 'demo-form',\n    initialValues: {\n      name: '',\n      age: 0,\n    },\n  });\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Then call ",(0,o.jsx)(n.code,{children:"createFormActions"})," function with the same form name as specified in ",(0,o.jsx)(n.code,{children:"useForm"})," settings:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"// Import type of form values from the file where you defined useForm\nimport { createFormActions } from '@mantine/form';\nimport type { DemoFormValues } from './DemoForm';\n\nexport const demoFormActions =\n  createFormActions<DemoFormValues>('demo-form');\n"})}),"\n",(0,o.jsxs)(n.p,{children:["After that, you can use ",(0,o.jsx)(n.code,{children:"demoFormActions"})," to change form state from anywhere in your application.\nFor example, after a fetch request or after a user interaction with a component that does not have access\nto the form state:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useEffect } from 'react';\nimport { Button } from '@mantine/core';\nimport { demoFormActions } from './demoFormActions';\n\nfunction ExternalComponent() {\n  useEffect(() => {\n    fetch('/api/user')\n      .then((res) => res.json())\n      .then((res) =>\n        demoFormActions.setValues({\n          name: res.name,\n          age: res.age,\n        })\n      );\n  }, []);\n\n  return (\n    <Button onClick={() => demoFormActions.reset()}>\n      Reset demo form\n    </Button>\n  );\n}\n"})}),"\n",(0,o.jsx)(n.h2,{id:"form-name",children:"Form name"}),"\n",(0,o.jsx)(n.p,{children:"Form name must be a string that contains only letters, numbers and dashes:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\n// ✅ Valid form name\nconst valid = useForm({ name: 'valid-FORM-name-10' mode: 'uncontrolled' });\n\n// ❌ Invalid form name: must not contain spaces and special characters\nconst invalid = useForm({ name: 'invalid_form name', mode: 'uncontrolled' });\n"})}),"\n",(0,o.jsx)(n.p,{children:"Note that form names must be unique, if you have multiple forms with the same name, form actions will\nupdate the state of all forms with the same name."}),"\n",(0,o.jsx)(n.h2,{id:"form-actions",children:"Form actions"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"createFormActions"})," function returns an object with the following methods:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"setFieldValue"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"setValues"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"setInitialValues"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"setErrors"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"setFieldError"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"clearFieldError"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"clearErrors"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"reset"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"validate"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"validateField"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"reorderListItem"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"removeListItem"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"insertListItem"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"setDirty"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"setTouched"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"resetDirty"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.code,{children:"resetTouched"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["All methods work similar to ",(0,o.jsx)(n.a,{href:"/form/use-form/",children:"use-form"})," hooks methods –\nfunctions accept the same arguments but do not return anything."]})]})}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,o.jsx)(c,{...e,children:(0,o.jsx)(l,{...e})})}}},function(e){e.O(0,[57938,17454,47747,49774,92888,40179],function(){return e(e.s=79942)}),_N_E=e.O()}]);