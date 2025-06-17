import {Reactive, reactive} from 'vue'

export default function<T extends object> (data: T): Reactive<T> {
  const instance = structuredClone(data);
  return reactive(instance)
}
