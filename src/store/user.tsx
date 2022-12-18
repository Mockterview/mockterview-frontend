import { atom, useAtom } from 'jotai'


export const textAtom = atom('hello')
export const uppercaseAtom = atom(
  (get) => get(textAtom)
)


export const result =atom("")

export const changeResult = atom(
    (set) => set(result)
)

export const setResult = atom(
    (get) => get(result)
)

// const funkyPigAtom = atom({ funkyPig: { glasses: 'stylish', bling: 'golden' }})

// const Component = () => {
//   const [funkyPig, setFunkyPig] = useAtom(funkyPigAtom)
//   const updateBling = (bling) => {
//     setFunkcyPig((prev) => ({ ...prev, funkyPig: { ...prev.funkyPig, bling } }))
//   }
//   // ...
// }


// export function SampleComponent() {
//     const [user, setUser] = useAtom(userAtom);

//     ...

//     setUser(response)
// }