<template>
  <div>index</div>
  <FetchList :msg="'a'"></FetchList>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'
import { FetchList } from '@/components'
import { watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const route = useRoute()
const prop = defineProps({
  msg: {
    type: String,
    default: () => '',
  },
})
watch(route, (newVal, oldVal) => {
  console.log(newVal, oldVal)
})
const id = route.query.id
function xhrHttpRequest({ url = location.href, method = 'get', data = {} }) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
    xhr.onerror = () => {
      reject(new Error(xhr.statusText))
    }
    xhr.send(data)
  })
}
/* xhrHttpRequest({
  url: 'http://localhost:3001/list/?id=' + id,
  method: 'get',
  data: {
    id,
  },
}).then((res) => {
  console.log(res)
}) */
/* function xhrHttpRequest({ url = location.href, method = 'get', data = {} }) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open(method, url)
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response)
      } else {
        reject(new Error(xhr.statusText))
      }
    }
    xhr.onerror = () => {
      reject(new Error(xhr.statusText))
    }
    xhr.send(data)
  })
} */
/* function* demo() {
  yield 1
  yield 2
  yield 3
}
const gen = demo()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
 */
/* const arr = [{ name: 1 }, { name: 2 }, { name: 3 }]
const iterator = arr.values()
for (let value of iterator) {
  console.log(value)
}
const arr1 = [1, 2, 3]
const arrIterator = arr1[Symbol.iterator]()
console.log(arrIterator.next()) */
/* const obj = {
  name: 'xxx',
  id: 1,
}
for (let value of obj) {
  console.log(value)
} */

/* 
function request({ url, method, data, success, error }) {
  let xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.send(data)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status >= 200 && xhr.status <= 300) {
        success(JSON.parse(xhr.responseText))
      } else {
        error(xhr.statusText)
      }
    }
  }
}
request({
  url: 'http://localhost:3001/list/?id=' + id,
  method: 'get',
  data: {
    id,
  },
  success: function (res) {
    console.log(res)
  },
  error: function (err) {
    console.log(err)
  },
}) */
// const NUMBER = 10
// const str = 'hello'
// const symbol = Symbol('a')

// const bigInt = BigInt(10)
// for(let i = 0; i < bigInt; i++) {
//   console.log(i)
// }
/* const arr1 = [{ name: 1 }, { name: 2 }, { name: 3 }]
for(let i in arr1){
    console.log(arr1[i])
}
 */
/* for(let value of new Array(1,2,3) || new Map([1,2,3]) || new Set([1,2,3])) {
    console.log(value)
} */
function addNumber(a: Number, b: Number) {
  return Number(a) + Number(b)
}
async function getList() {
  const data = await xhrHttpRequest({
    url: `http://localhost:3001/list/?id=2&num=${id}`,
    method: 'get',
  })
  const childId = JSON.parse(data)?.['data']?.childId
  const res = await xhrHttpRequest({
    url: `http://localhost:3001/detail/?id=${childId}`,
    method: 'get',
  })
  console.log(res)
}
// getList()
/* 
const arr1 = [1,2,3].map(el => {
    return el * 2
})
console.log(arr1) */
// 位运算符
// & 与
// | 或
// ~ 非
// ^ 异或
// << 左移
// >> 右移
// >>> 无符号右移
// &= 与赋值
// |= 或赋值
// ^= 异或赋值
// <<= 左移赋值
// >>= 右移赋值
// >>>= 无符号右移赋值
// 位运算符的优先级
// 按位与 &
// 按位或 |
// 按位异或 ^
// const a = 1
// const b = 2
// const c = a & b
// console.log(~2)
/* const arr1 = [1,2,3]
console.log(arr1.slice(1, 2))
*/
// const arr2 = [1,2,3]
// const obj = {
//     name: 'xxx',
//     id: 1,
// }
// console.log(Array.from(document.querySelectorAll('li')))
// console.log(new Array(1,{name: 'xxx'}))
const arr = [1, 2, 3]
console.log(arr.lastIndexOf(2))
</script>
