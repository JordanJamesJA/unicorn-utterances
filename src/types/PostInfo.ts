import { UnicornInfo } from "./UnicornInfo";
import { LicenseInfo } from "./LicenseInfo";
import { CollectionInfo, Languages } from "types/index";
import { MarkdownInstance } from "astro";

export interface RawPostInfo {
	title: string;
	published: string;
	authors: string[];
	tags: string[];
	attached: string[];
	license: string;
	description?: string;
	edited?: string;
	collection?: string;
	order?: number;
	originalLink?: string;
	noindex?: boolean;
}

export interface PostInfo extends RawPostInfo {
	slug: string;
	locales: Languages[];
	locale: Languages;
	publishedMeta: string;
	editedMeta?: string;
	authorsMeta: UnicornInfo[];
	licenseMeta: LicenseInfo;
	collectionMeta?: CollectionInfo;
	socialImg: string;
	bannerImg?: string;
	wordCount: number;
}

export interface ExtendedPostInfo extends PostInfo {
	contentMeta: string;
	Content: MarkdownInstance<never>["Content"];
	excerpt: string;
	suggestedArticles: [PostInfo, PostInfo, PostInfo];
	headingsWithId?: Array<{
		// Title value
		value: string;
		// ID
		slug: string;
		depth: number;
	}>;
}
