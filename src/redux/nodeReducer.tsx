import { createSlice } from '@reduxjs/toolkit'
import { Iblock, Iinfo_block, Irepeat_type, typeBlock } from '../types'


export const nodeReducer = createSlice({
  name: 'app',
  initialState: {
    value: 7744 as number,
    current_blocks: [] as Iinfo_block[],
    static_blocks: [
      {type: "string", name: 'Строка', color: "#d08E8C"},
      {type: "space", name: 'Пробел', color: "#c1c1c1"},
      {type: "all_numbers", name: 'Любая цифра', color: "#aFd09C"},
      {type: "all_letters", name: 'Любая буква', color: "#9CaFD0"},
      {type: "all_symbols", name: 'Любой символ', color: "#8cd0c0"},
      {type: "box_symbols", name: 'Набор символов', color: "#D09Cb4"},
      {type: "begin_string", name: 'Начало строки', color: "#e0c077"},
      {type: "end_string", name: 'Конец строки', color: "#d0d077"},
      {type: "border_word", name: 'Граница слова', color: "#83b064"},
    ] as Iblock[],
    current_draggable_info: "notype" as typeBlock,
    activeDropBlock: false,
    info_block: {
      id: -1,
      show: false,
      type_block: "notype",
      value: '',
      invert: false,
      binary: false,
      repeat: {active: false} as Irepeat_type
    } as Iinfo_block,
    result: '' as string,
  },
  reducers: {
    increment: (state, action) => {
      // Redux Toolkit позволяет нам писать "мутабельную" логику в reducer'ах.
      // Это не изменяет состояние(state) напрямую, потому что внутри используется библиотека Immer,
      // которая следит за изменениями в "черновом state" и создает новое 
      // неизменное состояние на основе этих изменений
      state.value += +action.payload
    },
    
    change_active_drop_block: (state, action) => {
      state.activeDropBlock = action.payload
    },
    close_info_block: (state) => {
      state.info_block = {
        id: -1,
        type_block: "notype",
        show: false,
        value: "",
        invert: false,
        binary: false,
        repeat: {active: false}
      }
    },
    enter_info_block: (state, action) => {
      state.info_block = {
        ...action.payload,
        show: true
      }
    },
    set_draggable_info: (state, action) => {
      state.current_draggable_info = action.payload
    },
    clear_draggable_info: (state) => {
      state.current_draggable_info = "notype"
    },

    add_current_block: (state, action) => {

      const new_current_block: Iinfo_block = {
        id: Date.now(),
        show: false,
        type_block: action.payload,
        value: "",
        invert: false,
        binary: false,
        repeat: {active: false}
      }

      state.current_blocks.push(new_current_block)
    },
    remove_current_block: (state, action) => {
      state.current_blocks = state.current_blocks.filter((b:Iinfo_block) => b.id !== action.payload)
      
      if(state.info_block.id === action.payload) {
        state.info_block = {
          id: -1,
          type_block: "notype",
          show: false,
          value: "",
          invert: false,
          binary: false,
          repeat: {active: false}
        }
      }
      
    },
    set_result: (state, action) => {
      state.result = action.payload
    },
    insert_current_block: (state, action) => {
      let index = state.current_blocks.findIndex((b: Iinfo_block) => b.id === action.payload.id_current_zone)
      if(action.payload.id_current_zone === 13) index = state.current_blocks.length

      const new_block: Iinfo_block = {
        id: Date.now(), 
        show: false, 
        type_block: action.payload.type_block, 
        value: "",
        invert: false,
        binary: false,
        repeat: {active: false}
      }

      state.current_blocks.splice(index, 0, new_block)
    },
    change_value_info_block: (state, action) => {

      const id_change:number = action.payload.info_block.id
      const {value} = action.payload

      state.info_block = {...action.payload.info_block, value}

      state.current_blocks = [
        ...state.current_blocks.map((cb: any) => (
          id_change === cb.id ? { ...cb, value } : cb
        ))
      ]
    },
    change_invert_info_block: (state, action) => {
      
      const id_change:number = action.payload.info_block.id
      const {invert} = action.payload

      state.info_block = {...action.payload.info_block, invert}

      state.current_blocks = [
        ...state.current_blocks.map((cb: any) => (
          id_change === cb.id ? { ...cb, invert } : cb
        ))
      ]
    },
    change_binary_info_block: (state, action) => {
      const id_change:number = action.payload.info_block.id
      const {binary} = action.payload

      state.info_block = {...action.payload.info_block, binary}

      state.current_blocks = [
        ...state.current_blocks.map((cb: any) => (
          id_change === cb.id ? { ...cb, binary } : cb
        ))
      ]
    },
    change_repeat_info_block: (state, action) => {
      
      const id_change:number = action.payload.info_block.id
      const {repeat} = action.payload

      state.info_block = {...action.payload.info_block, repeat}

      state.current_blocks = [
        ...state.current_blocks.map((cb: any) => (
          id_change === cb.id ? { ...cb, repeat } : cb
        ))
      ]
    }
  },
})

// Функция действия генерируется на каждую функцию релюсера(reducer), определённую в createSlice
export const { 
  increment, 
  set_draggable_info, 
  clear_draggable_info, 
  add_current_block,
  change_active_drop_block,
  insert_current_block,
  close_info_block,
  enter_info_block,
  remove_current_block,
  set_result,
  change_value_info_block,
  change_invert_info_block,
  change_binary_info_block,
  change_repeat_info_block
} = nodeReducer.actions

export default nodeReducer.reducer