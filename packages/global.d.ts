/**
 * Global internal type definitions.
 *
 * Definitions provided here cannot be used in public APIs, as they aren't
 * bundled with the published packages. declaring an interface that depends on
 * them will yield, "Property 'X' of exported interface has or is using private
 * name 'Y'.ts(4033)".
 */

/** GL Matrix */

// See: https://github.com/toji/gl-matrix/issues/423

declare module 'gl-matrix/vec4' {
	import { vec4 } from 'gl-matrix';
	export = vec4;
}

declare module 'gl-matrix/vec3' {
	import { vec3 } from 'gl-matrix';
	export = vec3;
}

declare module 'gl-matrix/vec2' {
	import { vec2 } from 'gl-matrix';
	export = vec2;
}

declare module 'gl-matrix/mat4' {
	import { mat4 } from 'gl-matrix';
	export = mat4;
}

declare module 'gl-matrix/mat3' {
	import { mat3 } from 'gl-matrix';
	export = mat3;
}

/** Deno */

declare const Deno: {
	readFile: (path: string) => Promise<Uint8Array>;
	readTextFile: (path: string) => Promise<string>;
};

/** Squoosh */

// https://github.com/GoogleChromeLabs/squoosh/issues/1223
declare module '@squoosh/lib' {
	enum Codec {
		OXIPNG = 'oxipng',
		MOZJPEG = 'mozjpeg',
		WEBP = 'webp',
	}

	export class ImagePool {
		constructor(jobs: number);
		ingestImage(image: Uint8Array): Image;
		close(): Promise<void>;
	}

	export class Image {
		preprocess(settings: Record<string, unknown>): Promise<void>;
		encode(settings: Record<string, unknown>): Promise<unknown>;
		encodedWith: Record<Codec, Promise<EncodedImage>>;
	}

	export class EncodedImage {
		optionsUsed: Record<string, unknown>;
		binary: Uint8Array;
	}
}
