(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[65731],{64278:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var r=(0,n(99882).Z)("trash","IconTrash",[["path",{d:"M4 7l16 0",key:"svg-0"}],["path",{d:"M10 11l0 6",key:"svg-1"}],["path",{d:"M14 11l0 6",key:"svg-2"}],["path",{d:"M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12",key:"svg-3"}],["path",{d:"M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3",key:"svg-4"}]])},69378:function(e){"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!=o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(s=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!=o--;)if(!Object.prototype.hasOwnProperty.call(n,s[o]))return!1;for(o=r;0!=o--;){var r,o,s,a=s[o];if(!e(t[a],n[a]))return!1}return!0}return t!=t&&n!=n}},21920:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/form/nested",function(){return n(30418)}])},30418:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return I}});var r=n(52322),o=n(45392),s=n(2784),a=n(28559),i=n(74770),l=n(56159),c=n(59259);let m=`
import { useForm } from '@mantine/form';
import { Box, Checkbox, TextInput } from '@mantine/core';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      terms: false,
      user: {
        firstName: '',
        lastName: '',
      },
    },
  });

  return (
    <Box maw={340} mx="auto">
      <TextInput
        label="First name"
        placeholder="First name"
        {...form.getInputProps('user.firstName')}
      />
      <TextInput
        label="Last name"
        placeholder="Last name"
        mt="md"
        {...form.getInputProps('user.lastName')}
      />
      <Checkbox
        label="I accepts terms & conditions"
        mt="sm"
        {...form.getInputProps('terms', { type: 'checkbox' })}
      />
    </Box>
  );
}
`,u={type:"code",component:function(){let e=(0,c.c)({mode:"uncontrolled",initialValues:{terms:!1,user:{firstName:"",lastName:""}}});return s.createElement(a.x,{maw:340,mx:"auto"},s.createElement(i.o,{label:"First name",placeholder:"First name",...e.getInputProps("user.firstName")}),s.createElement(i.o,{label:"Last name",placeholder:"Last name",mt:"md",...e.getInputProps("user.lastName")}),s.createElement(l.X,{label:"I accepts terms & conditions",mt:"sm",...e.getInputProps("terms",{type:"checkbox"})}))},code:m};var d=n(64278),p=n(93010),f=n(950),h=n(54813),Text=n(8582),x=n(17115),y=n(73533);let g=`
import { useForm } from '@mantine/form';
import { TextInput, Switch, Group, ActionIcon, Box, Text, Button } from '@mantine/core';
import { randomId } from '@mantine/hooks';
import { IconTrash } from '@tabler/icons-react';

function Demo() {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      employees: [{ name: '', active: false, key: randomId() }],
    },
  });

  const fields = form.getValues().employees.map((item, index) => (
    <Group key={item.key} mt="xs">
      <TextInput
        placeholder="John Doe"
        withAsterisk
        style={{ flex: 1 }}
        {...form.getInputProps(\`employees.\${index}.name\`)}
      />
      <Switch
        label="Active"
        {...form.getInputProps(\`employees.\${index}.active\`, { type: 'checkbox' })}
      />
      <ActionIcon color="red" onClick={() => form.removeListItem('employees', index)}>
        <IconTrash size="1rem" />
      </ActionIcon>
    </Group>
  ));

  return (
    <Box maw={500} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs">
          <Text fw={500} size="sm" style={{ flex: 1 }}>
            Name
          </Text>
          <Text fw={500} size="sm" pr={90}>
            Status
          </Text>
        </Group>
      ) : (
        <Text c="dimmed" ta="center">
          No one here...
        </Text>
      )}

      {fields}

      <Group justify="center" mt="md">
        <Button
          onClick={() =>
            form.insertListItem('employees', { name: '', active: false, key: randomId() })
          }
        >
          Add employee
        </Button>
      </Group>
    </Box>
  );
}
`,j={type:"code",component:function(){let e=(0,c.c)({mode:"uncontrolled",initialValues:{employees:[{name:"",active:!1,key:(0,y.k)()}]}}),t=e.getValues().employees.map((t,n)=>s.createElement(p.Z,{key:t.key,mt:"xs"},s.createElement(i.o,{placeholder:"John Doe",withAsterisk:!0,style:{flex:1},...e.getInputProps(`employees.${n}.name`)}),s.createElement(f.r,{label:"Active",...e.getInputProps(`employees.${n}.active`,{type:"checkbox"})}),s.createElement(h.A,{color:"red",onClick:()=>e.removeListItem("employees",n)},s.createElement(d.Z,{size:"1rem"}))));return s.createElement(a.x,{maw:500,mx:"auto"},t.length>0?s.createElement(p.Z,{mb:"xs"},s.createElement(Text.x,{fw:500,size:"sm",style:{flex:1}},"Name"),s.createElement(Text.x,{fw:500,size:"sm",pr:90},"Status")):s.createElement(Text.x,{c:"dimmed",ta:"center"},"No one here..."),t,s.createElement(p.Z,{justify:"center",mt:"md"},s.createElement(x.z,{onClick:()=>e.insertListItem("employees",{name:"",active:!1,key:(0,y.k)()})},"Add employee")))},code:g};var v=n(79016),b=n(33638);let k=(0,v.A)(b.us.formNested);function w(e){let t={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Demo:n}=t;return n||function(e,t){throw Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Demo",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"properties-paths",children:"Properties paths"}),"\n",(0,r.jsxs)(t.p,{children:["Most of ",(0,r.jsx)(t.code,{children:"form"})," handlers accept property path as the first argument.\nProperty path includes keys/indices of objects/arrays at which target property is contained:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    user: {\n      firstName: 'John',\n      lastName: 'Doe',\n    },\n\n    fruits: [\n      { name: 'Banana', available: true },\n      { name: 'Orange', available: false },\n    ],\n\n    deeply: {\n      nested: {\n        object: [{ item: 1 }, { item: 2 }],\n      },\n    },\n  },\n});\n\n// Props for input that is controlled by user object firstName field\nform.getInputProps('user.firstName');\n\n// Set value of `name` field that is contained in object at second position of fruits array:\nform.setFieldValue('fruits.1.name', 'Carrot');\n\n// Validate deeply nested field\nform.validateField('deeply.nested.object.0.item');\n"})}),"\n",(0,r.jsx)(t.h2,{id:"nested-objects",children:"Nested objects"}),"\n",(0,r.jsx)(n,{data:u}),"\n",(0,r.jsx)(t.h2,{id:"set-nested-object-value",children:"Set nested object value"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    user: {\n      name: '',\n      occupation: '',\n    },\n  },\n});\n\n// You can set values for each field individually\nform.setFieldValue('user.name', 'John');\nform.setFieldValue('user.occupation', 'Engineer');\n\n// Or set the entire object\nform.setFieldValue('user', { name: 'Jane', occupation: 'Architect' });\n"})}),"\n",(0,r.jsx)(t.h2,{id:"nested-object-values-validation",children:"Nested object values validation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    user: {\n      name: '',\n      occupation: '',\n    },\n  },\n\n  validate: {\n    user: {\n      name: (value) =>\n        value.length < 2 ? 'Name is too short' : null,\n      occupation: (value) =>\n        value.length < 2 ? 'Occupation is too short' : null,\n    },\n  },\n});\n\nform.validate();\nform.errors; // -> { 'user.name': 'Name is too short', 'user.occupation': 'Occupation is too short' }\n"})}),"\n",(0,r.jsx)(t.h2,{id:"nested-arrays",children:"Nested arrays"}),"\n",(0,r.jsx)(n,{data:j}),"\n",(0,r.jsx)(t.h2,{id:"list-handlers",children:"List handlers"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"useForm"})," hook provides the following handlers to manage list state:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"removeListItem"})," – removes list item at given index"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"insertListItem"})," – inserts list item at given index (appends item to the end of the list if index is not specified)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"reorderListItem"})," – reorders list item with given position at specified field"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"list-values-validation",children:"List values validation"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useForm } from '@mantine/form';\n\nconst form = useForm({\n  mode: 'uncontrolled',\n  initialValues: {\n    users: [\n      { name: 'John', age: 12 },\n      { name: '', age: 22 },\n    ],\n  },\n\n  validate: {\n    users: {\n      name: (value) =>\n        value.length < 2\n          ? 'Name should have at least 2 letters'\n          : null,\n      age: (value) =>\n        value < 18 ? 'User must be 18 or older' : null,\n    },\n  },\n});\n\n// Validate list item field\nform.validateField('users.1.name');\n\n// Or with all other fields\nform.validate();\nconsole.log(form.errors);\n// {\n//  'users.0.age': 'User must be 18 or older',\n//  'users.1.name': 'Name should have at least 2 letters'\n// }\n"})})]})}function I(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,r.jsx)(k,{...e,children:(0,r.jsx)(w,{...e})})}},15463:function(e,t,n){"use strict";function r(e,t,n){"object"==typeof n.value&&(n.value=o(n.value)),n.enumerable&&!n.get&&!n.set&&n.configurable&&n.writable&&"__proto__"!==t?e[t]=n.value:Object.defineProperty(e,t,n)}function o(e){if("object"!=typeof e)return e;var t,n,s,a=0,i=Object.prototype.toString.call(e);if("[object Object]"===i?s=Object.create(e.__proto__||null):"[object Array]"===i?s=Array(e.length):"[object Set]"===i?(s=new Set,e.forEach(function(e){s.add(o(e))})):"[object Map]"===i?(s=new Map,e.forEach(function(e,t){s.set(o(t),o(e))})):"[object Date]"===i?s=new Date(+e):"[object RegExp]"===i?s=new RegExp(e.source,e.flags):"[object DataView]"===i?s=new e.constructor(o(e.buffer)):"[object ArrayBuffer]"===i?s=e.slice(0):"Array]"===i.slice(-6)&&(s=new e.constructor(e)),s){for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r(s,n[a],Object.getOwnPropertyDescriptor(e,n[a]));for(a=0,n=Object.getOwnPropertyNames(e);a<n.length;a++)Object.hasOwnProperty.call(s,t=n[a])&&s[t]===e[t]||r(s,t,Object.getOwnPropertyDescriptor(e,t))}return s||e}n.d(t,{Y:function(){return o}})}},function(e){e.O(0,[57938,17454,47747,59259,49774,92888,40179],function(){return e(e.s=21920)}),_N_E=e.O()}]);