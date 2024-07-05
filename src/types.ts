export type typeBlock = "notype" | "string" | "space" | "all_numbers" | "all_letters" | "all_symbols" | "box_symbols" | "begin_string" | "end_string" | "border_word"
export type typeRepeat = "zero_infinity" | "one_infinity" | "concretely" | "range"

export interface Iblock {
    type: typeBlock
    name: string
    color: string
}

export interface Irepeat_type {
    active: boolean, 
    type?: typeRepeat, 
    value?: [number, number?]
}


export interface Iinfo_block {
    id: number
    show: boolean
    type_block: typeBlock
    value: string
    invert: boolean
    binary: boolean
    repeat: Irepeat_type
}
