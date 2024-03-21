export type NameMessageType =
	| 'empty'
	| 'tooLong'
	| 'invalidChar'
	| 'duplicate'
	| 'loading'
	| 'valid'
export interface ContentTypeInfo {
	name: string
	path: string
}
