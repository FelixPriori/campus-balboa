/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The Circle scalar type represents a circle, defined by the coordinates of its center and a radius. The Circle type is used to represent a searchable area together with the '_within_circle' filter. */
  Circle: { input: any; output: any; }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any; }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any; }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any; }
  /** The Rectangle scalar type represents a rectangle, defined by the coordinates of its top left and bottom right corners. The Rectangle type is used to represent a searchable area together with the '_within_rectangle' filter. */
  Rectangle: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetCursorCollection = {
  __typename?: 'AssetCursorCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
  featuredSlideCollection?: Maybe<FeaturedSlideCollection>;
  featuredSlideCursorCollection?: Maybe<FeaturedSlideCursorCollection>;
  instructorCollection?: Maybe<InstructorCollection>;
  instructorCursorCollection?: Maybe<InstructorCursorCollection>;
  openGraphImageCollection?: Maybe<OpenGraphImageCollection>;
  openGraphImageCursorCollection?: Maybe<OpenGraphImageCursorCollection>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  pageMetadataCursorCollection?: Maybe<PageMetadataCursorCollection>;
  partnersCollection?: Maybe<PartnersCollection>;
  partnersCursorCollection?: Maybe<PartnersCursorCollection>;
  socialMediaCollection?: Maybe<SocialMediaCollection>;
  socialMediaCursorCollection?: Maybe<SocialMediaCursorCollection>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsFeaturedSlideCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsFeaturedSlideCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsInstructorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsInstructorCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsOpenGraphImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsOpenGraphImageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsPageMetadataCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsPartnersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsPartnersCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type AssetLinkingCollectionsSocialMediaCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  concepts: Array<Maybe<TaxonomyConcept>>;
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>;
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>;
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type CursorPages = {
  __typename?: 'CursorPages';
  next?: Maybe<Scalars['String']['output']>;
  prev?: Maybe<Scalars['String']['output']>;
};

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryCursorCollection = {
  __typename?: 'EntryCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type Event = Entry & _Node & {
  __typename?: 'Event';
  _id: Scalars['ID']['output'];
  closedText?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  dJsCollection?: Maybe<EventDJsCollection>;
  dJsCursorCollection?: Maybe<EventDJsCursorCollection>;
  dark?: Maybe<Scalars['Boolean']['output']>;
  details?: Maybe<EventDetails>;
  endDate?: Maybe<Scalars['DateTime']['output']>;
  image?: Maybe<Asset>;
  instructorsCollection?: Maybe<EventInstructorsCollection>;
  instructorsCursorCollection?: Maybe<EventInstructorsCursorCollection>;
  levelRequirement?: Maybe<LevelRequirement>;
  linkedFrom?: Maybe<EventLinkingCollections>;
  metadata?: Maybe<PageMetadata>;
  partnersCollection?: Maybe<EventPartnersCollection>;
  partnersCursorCollection?: Maybe<EventPartnersCursorCollection>;
  pricingCollection?: Maybe<EventPricingCollection>;
  pricingCursorCollection?: Maybe<EventPricingCursorCollection>;
  registrationLink?: Maybe<Link>;
  registrationsOpened?: Maybe<Scalars['Boolean']['output']>;
  scheduleCollection?: Maybe<EventScheduleCollection>;
  scheduleCursorCollection?: Maybe<EventScheduleCursorCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  socialMediaCollection?: Maybe<EventSocialMediaCollection>;
  socialMediaCursorCollection?: Maybe<EventSocialMediaCursorCollection>;
  startDate?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  tagline?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  venuesCollection?: Maybe<EventVenuesCollection>;
  venuesCursorCollection?: Maybe<EventVenuesCursorCollection>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventClosedTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventDJsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventDJsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InstructorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventDJsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventDJsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InstructorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventDarkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventEndDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventInstructorsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventInstructorsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InstructorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventInstructorsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventInstructorsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InstructorFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventLevelRequirementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LevelRequirementFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventPartnersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventPartnersCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PartnersFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventPartnersCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventPartnersCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PartnersFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventPricingCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventPricingCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PriceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventPricingCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventPricingCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PriceFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventRegistrationLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventRegistrationsOpenedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventScheduleCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventScheduleCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventBlockFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventScheduleCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventScheduleCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventBlockFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventSocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventSocialMediaCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventSocialMediaCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventSocialMediaCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventStartDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventTaglineArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventVenuesCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventVenuesCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VenueFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/event) */
export type EventVenuesCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventVenuesCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VenueFilter>;
};

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlock = Entry & _Node & {
  __typename?: 'EventBlock';
  _id: Scalars['ID']['output'];
  blockType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<EventBlockDescription>;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<EventBlockLinkingCollections>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlockBlockTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlockDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlockEndTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlockStartTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlockSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/eventBlock) */
export type EventBlockTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventBlockCollection = {
  __typename?: 'EventBlockCollection';
  items: Array<Maybe<EventBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventBlockCursorCollection = {
  __typename?: 'EventBlockCursorCollection';
  items: Array<Maybe<EventBlock>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type EventBlockDescription = {
  __typename?: 'EventBlockDescription';
  json: Scalars['JSON']['output'];
  links: EventBlockDescriptionLinks;
};

export type EventBlockDescriptionAssets = {
  __typename?: 'EventBlockDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EventBlockDescriptionEntries = {
  __typename?: 'EventBlockDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EventBlockDescriptionLinks = {
  __typename?: 'EventBlockDescriptionLinks';
  assets: EventBlockDescriptionAssets;
  entries: EventBlockDescriptionEntries;
  resources: EventBlockDescriptionResources;
};

export type EventBlockDescriptionResources = {
  __typename?: 'EventBlockDescriptionResources';
  block: Array<EventBlockDescriptionResourcesBlock>;
  hyperlink: Array<EventBlockDescriptionResourcesHyperlink>;
  inline: Array<EventBlockDescriptionResourcesInline>;
};

export type EventBlockDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'EventBlockDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type EventBlockDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'EventBlockDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type EventBlockDescriptionResourcesInline = ResourceLink & {
  __typename?: 'EventBlockDescriptionResourcesInline';
  sys: ResourceSys;
};

export type EventBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventBlockFilter>>>;
  blockType?: InputMaybe<Scalars['String']['input']>;
  blockType_contains?: InputMaybe<Scalars['String']['input']>;
  blockType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blockType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockType_not?: InputMaybe<Scalars['String']['input']>;
  blockType_not_contains?: InputMaybe<Scalars['String']['input']>;
  blockType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type EventBlockLinkingCollections = {
  __typename?: 'EventBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
};


export type EventBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type EventBlockLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type EventBlockLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventBlockLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type EventBlockLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventBlockLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum EventBlockLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EventBlockLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum EventBlockOrder {
  BlockTypeAsc = 'blockType_ASC',
  BlockTypeDesc = 'blockType_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventCollection = {
  __typename?: 'EventCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EventCursorCollection = {
  __typename?: 'EventCursorCollection';
  items: Array<Maybe<Event>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type EventDJsCollection = {
  __typename?: 'EventDJsCollection';
  items: Array<Maybe<Instructor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventDJsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PronounsAsc = 'pronouns_ASC',
  PronounsDesc = 'pronouns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventDJsCursorCollection = {
  __typename?: 'EventDJsCursorCollection';
  items: Array<Maybe<Instructor>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum EventDJsCursorCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PronounsAsc = 'pronouns_ASC',
  PronounsDesc = 'pronouns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventDetails = {
  __typename?: 'EventDetails';
  json: Scalars['JSON']['output'];
  links: EventDetailsLinks;
};

export type EventDetailsAssets = {
  __typename?: 'EventDetailsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type EventDetailsEntries = {
  __typename?: 'EventDetailsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type EventDetailsLinks = {
  __typename?: 'EventDetailsLinks';
  assets: EventDetailsAssets;
  entries: EventDetailsEntries;
  resources: EventDetailsResources;
};

export type EventDetailsResources = {
  __typename?: 'EventDetailsResources';
  block: Array<EventDetailsResourcesBlock>;
  hyperlink: Array<EventDetailsResourcesHyperlink>;
  inline: Array<EventDetailsResourcesInline>;
};

export type EventDetailsResourcesBlock = ResourceLink & {
  __typename?: 'EventDetailsResourcesBlock';
  sys: ResourceSys;
};

export type EventDetailsResourcesHyperlink = ResourceLink & {
  __typename?: 'EventDetailsResourcesHyperlink';
  sys: ResourceSys;
};

export type EventDetailsResourcesInline = ResourceLink & {
  __typename?: 'EventDetailsResourcesInline';
  sys: ResourceSys;
};

export type EventFilter = {
  AND?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EventFilter>>>;
  closedText?: InputMaybe<Scalars['String']['input']>;
  closedText_contains?: InputMaybe<Scalars['String']['input']>;
  closedText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  closedText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  closedText_not?: InputMaybe<Scalars['String']['input']>;
  closedText_not_contains?: InputMaybe<Scalars['String']['input']>;
  closedText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  dJs?: InputMaybe<CfInstructorNestedFilter>;
  dJsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dark?: InputMaybe<Scalars['Boolean']['input']>;
  dark_exists?: InputMaybe<Scalars['Boolean']['input']>;
  dark_not?: InputMaybe<Scalars['Boolean']['input']>;
  details_contains?: InputMaybe<Scalars['String']['input']>;
  details_exists?: InputMaybe<Scalars['Boolean']['input']>;
  details_not_contains?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  endDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  instructors?: InputMaybe<CfInstructorNestedFilter>;
  instructorsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  levelRequirement?: InputMaybe<CfLevelRequirementNestedFilter>;
  levelRequirement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<CfPageMetadataNestedFilter>;
  metadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  partners?: InputMaybe<CfPartnersNestedFilter>;
  partnersCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pricing?: InputMaybe<CfPriceNestedFilter>;
  pricingCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  registrationLink?: InputMaybe<CfLinkNestedFilter>;
  registrationLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  registrationsOpened?: InputMaybe<Scalars['Boolean']['input']>;
  registrationsOpened_exists?: InputMaybe<Scalars['Boolean']['input']>;
  registrationsOpened_not?: InputMaybe<Scalars['Boolean']['input']>;
  schedule?: InputMaybe<CfEventBlockNestedFilter>;
  scheduleCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  socialMedia?: InputMaybe<CfLinkNestedFilter>;
  socialMediaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startDate_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startDate_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not?: InputMaybe<Scalars['DateTime']['input']>;
  startDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tagline?: InputMaybe<Scalars['String']['input']>;
  tagline_contains?: InputMaybe<Scalars['String']['input']>;
  tagline_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tagline_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tagline_not?: InputMaybe<Scalars['String']['input']>;
  tagline_not_contains?: InputMaybe<Scalars['String']['input']>;
  tagline_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venues?: InputMaybe<CfVenueNestedFilter>;
  venuesCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type EventInstructorsCollection = {
  __typename?: 'EventInstructorsCollection';
  items: Array<Maybe<Instructor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventInstructorsCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PronounsAsc = 'pronouns_ASC',
  PronounsDesc = 'pronouns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventInstructorsCursorCollection = {
  __typename?: 'EventInstructorsCursorCollection';
  items: Array<Maybe<Instructor>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum EventInstructorsCursorCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PronounsAsc = 'pronouns_ASC',
  PronounsDesc = 'pronouns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventLinkingCollections = {
  __typename?: 'EventLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type EventLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type EventLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum EventOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventPartnersCollection = {
  __typename?: 'EventPartnersCollection';
  items: Array<Maybe<Partners>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventPartnersCollectionOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventPartnersCursorCollection = {
  __typename?: 'EventPartnersCursorCollection';
  items: Array<Maybe<Partners>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum EventPartnersCursorCollectionOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventPricingCollection = {
  __typename?: 'EventPricingCollection';
  items: Array<Maybe<Price>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventPricingCollectionOrder {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  BatchAsc = 'batch_ASC',
  BatchDesc = 'batch_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TierAsc = 'tier_ASC',
  TierDesc = 'tier_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type EventPricingCursorCollection = {
  __typename?: 'EventPricingCursorCollection';
  items: Array<Maybe<Price>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum EventPricingCursorCollectionOrder {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  BatchAsc = 'batch_ASC',
  BatchDesc = 'batch_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TierAsc = 'tier_ASC',
  TierDesc = 'tier_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type EventScheduleCollection = {
  __typename?: 'EventScheduleCollection';
  items: Array<Maybe<EventBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventScheduleCollectionOrder {
  BlockTypeAsc = 'blockType_ASC',
  BlockTypeDesc = 'blockType_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventScheduleCursorCollection = {
  __typename?: 'EventScheduleCursorCollection';
  items: Array<Maybe<EventBlock>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum EventScheduleCursorCollectionOrder {
  BlockTypeAsc = 'blockType_ASC',
  BlockTypeDesc = 'blockType_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type EventSocialMediaCollection = {
  __typename?: 'EventSocialMediaCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventSocialMediaCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type EventSocialMediaCursorCollection = {
  __typename?: 'EventSocialMediaCursorCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum EventSocialMediaCursorCollectionOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type EventVenuesCollection = {
  __typename?: 'EventVenuesCollection';
  items: Array<Maybe<Venue>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum EventVenuesCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PurposeAsc = 'purpose_ASC',
  PurposeDesc = 'purpose_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VenueAddressAsc = 'venueAddress_ASC',
  VenueAddressDesc = 'venueAddress_DESC'
}

export type EventVenuesCursorCollection = {
  __typename?: 'EventVenuesCursorCollection';
  items: Array<Maybe<Venue>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum EventVenuesCursorCollectionOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PurposeAsc = 'purpose_ASC',
  PurposeDesc = 'purpose_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VenueAddressAsc = 'venueAddress_ASC',
  VenueAddressDesc = 'venueAddress_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/featuredSlide) */
export type FeaturedSlide = Entry & _Node & {
  __typename?: 'FeaturedSlide';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  details?: Maybe<FeaturedSlideDetails>;
  image?: Maybe<Asset>;
  link?: Maybe<Link>;
  linkedFrom?: Maybe<FeaturedSlideLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/featuredSlide) */
export type FeaturedSlideDetailsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/featuredSlide) */
export type FeaturedSlideImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/featuredSlide) */
export type FeaturedSlideLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/featuredSlide) */
export type FeaturedSlideLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/featuredSlide) */
export type FeaturedSlideTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/featuredSlide) */
export type FeaturedSlideTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FeaturedSlideCollection = {
  __typename?: 'FeaturedSlideCollection';
  items: Array<Maybe<FeaturedSlide>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FeaturedSlideCursorCollection = {
  __typename?: 'FeaturedSlideCursorCollection';
  items: Array<Maybe<FeaturedSlide>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type FeaturedSlideDetails = {
  __typename?: 'FeaturedSlideDetails';
  json: Scalars['JSON']['output'];
  links: FeaturedSlideDetailsLinks;
};

export type FeaturedSlideDetailsAssets = {
  __typename?: 'FeaturedSlideDetailsAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type FeaturedSlideDetailsEntries = {
  __typename?: 'FeaturedSlideDetailsEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type FeaturedSlideDetailsLinks = {
  __typename?: 'FeaturedSlideDetailsLinks';
  assets: FeaturedSlideDetailsAssets;
  entries: FeaturedSlideDetailsEntries;
  resources: FeaturedSlideDetailsResources;
};

export type FeaturedSlideDetailsResources = {
  __typename?: 'FeaturedSlideDetailsResources';
  block: Array<FeaturedSlideDetailsResourcesBlock>;
  hyperlink: Array<FeaturedSlideDetailsResourcesHyperlink>;
  inline: Array<FeaturedSlideDetailsResourcesInline>;
};

export type FeaturedSlideDetailsResourcesBlock = ResourceLink & {
  __typename?: 'FeaturedSlideDetailsResourcesBlock';
  sys: ResourceSys;
};

export type FeaturedSlideDetailsResourcesHyperlink = ResourceLink & {
  __typename?: 'FeaturedSlideDetailsResourcesHyperlink';
  sys: ResourceSys;
};

export type FeaturedSlideDetailsResourcesInline = ResourceLink & {
  __typename?: 'FeaturedSlideDetailsResourcesInline';
  sys: ResourceSys;
};

export type FeaturedSlideFilter = {
  AND?: InputMaybe<Array<InputMaybe<FeaturedSlideFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FeaturedSlideFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  details_contains?: InputMaybe<Scalars['String']['input']>;
  details_exists?: InputMaybe<Scalars['Boolean']['input']>;
  details_not_contains?: InputMaybe<Scalars['String']['input']>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<CfLinkNestedFilter>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type FeaturedSlideLinkingCollections = {
  __typename?: 'FeaturedSlideLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type FeaturedSlideLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FeaturedSlideLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FeaturedSlideOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type Footer = Entry & _Node & {
  __typename?: 'Footer';
  _id: Scalars['ID']['output'];
  contact?: Maybe<Scalars['String']['output']>;
  contactLink?: Maybe<Link>;
  contentfulMetadata: ContentfulMetadata;
  copyright?: Maybe<Scalars['String']['output']>;
  donateButton?: Maybe<Link>;
  entryTitle?: Maybe<Scalars['String']['output']>;
  landAcknowledgement?: Maybe<LandAcknowledgement>;
  linkedFrom?: Maybe<FooterLinkingCollections>;
  socialMediasCollection?: Maybe<FooterSocialMediasCollection>;
  socialMediasCursorCollection?: Maybe<FooterSocialMediasCursorCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterContactArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterContactLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterCopyrightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterDonateButtonArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterLandAcknowledgementArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LandAcknowledgementFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterSocialMediasCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterSocialMediasCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SocialMediaFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/footer) */
export type FooterSocialMediasCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterSocialMediasCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SocialMediaFilter>;
};

export type FooterCollection = {
  __typename?: 'FooterCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FooterCursorCollection = {
  __typename?: 'FooterCursorCollection';
  items: Array<Maybe<Footer>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type FooterFilter = {
  AND?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<FooterFilter>>>;
  contact?: InputMaybe<Scalars['String']['input']>;
  contactLink?: InputMaybe<CfLinkNestedFilter>;
  contactLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contact_contains?: InputMaybe<Scalars['String']['input']>;
  contact_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contact_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contact_not?: InputMaybe<Scalars['String']['input']>;
  contact_not_contains?: InputMaybe<Scalars['String']['input']>;
  contact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  copyright_contains?: InputMaybe<Scalars['String']['input']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']['input']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  copyright_not?: InputMaybe<Scalars['String']['input']>;
  copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  donateButton?: InputMaybe<CfLinkNestedFilter>;
  donateButton_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  landAcknowledgement?: InputMaybe<CfLandAcknowledgementNestedFilter>;
  landAcknowledgement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  socialMedias?: InputMaybe<CfSocialMediaNestedFilter>;
  socialMediasCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type FooterLinkingCollections = {
  __typename?: 'FooterLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type FooterLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FooterLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FooterLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type FooterLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FooterLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterLinkingCollectionsPageCursorCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum FooterOrder {
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterSocialMediasCollection = {
  __typename?: 'FooterSocialMediasCollection';
  items: Array<Maybe<SocialMedia>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum FooterSocialMediasCollectionOrder {
  AccessibilityDescriptionAsc = 'accessibilityDescription_ASC',
  AccessibilityDescriptionDesc = 'accessibilityDescription_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type FooterSocialMediasCursorCollection = {
  __typename?: 'FooterSocialMediasCursorCollection';
  items: Array<Maybe<SocialMedia>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum FooterSocialMediasCursorCollectionOrder {
  AccessibilityDescriptionAsc = 'accessibilityDescription_ASC',
  AccessibilityDescriptionDesc = 'accessibilityDescription_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/hero) */
export type Hero = Entry & _Node & {
  __typename?: 'Hero';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<HeroDescription>;
  linkedFrom?: Maybe<HeroLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/hero) */
export type HeroDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/hero) */
export type HeroLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/hero) */
export type HeroTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroCollection = {
  __typename?: 'HeroCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type HeroCursorCollection = {
  __typename?: 'HeroCursorCollection';
  items: Array<Maybe<Hero>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type HeroDescription = {
  __typename?: 'HeroDescription';
  json: Scalars['JSON']['output'];
  links: HeroDescriptionLinks;
};

export type HeroDescriptionAssets = {
  __typename?: 'HeroDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type HeroDescriptionEntries = {
  __typename?: 'HeroDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type HeroDescriptionLinks = {
  __typename?: 'HeroDescriptionLinks';
  assets: HeroDescriptionAssets;
  entries: HeroDescriptionEntries;
  resources: HeroDescriptionResources;
};

export type HeroDescriptionResources = {
  __typename?: 'HeroDescriptionResources';
  block: Array<HeroDescriptionResourcesBlock>;
  hyperlink: Array<HeroDescriptionResourcesHyperlink>;
  inline: Array<HeroDescriptionResourcesInline>;
};

export type HeroDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type HeroDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type HeroDescriptionResourcesInline = ResourceLink & {
  __typename?: 'HeroDescriptionResourcesInline';
  sys: ResourceSys;
};

export type HeroFilter = {
  AND?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<HeroFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type HeroLinkingCollections = {
  __typename?: 'HeroLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type HeroLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HeroLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HeroLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type HeroLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HeroLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroLinkingCollectionsPageCursorCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum HeroOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/instructor) */
export type Instructor = Entry & _Node & {
  __typename?: 'Instructor';
  _id: Scalars['ID']['output'];
  avatar?: Maybe<Asset>;
  biography?: Maybe<InstructorBiography>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<InstructorLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  pronouns?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/instructor) */
export type InstructorAvatarArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/instructor) */
export type InstructorBiographyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/instructor) */
export type InstructorLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/instructor) */
export type InstructorNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/instructor) */
export type InstructorPronounsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/instructor) */
export type InstructorTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type InstructorBiography = {
  __typename?: 'InstructorBiography';
  json: Scalars['JSON']['output'];
  links: InstructorBiographyLinks;
};

export type InstructorBiographyAssets = {
  __typename?: 'InstructorBiographyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type InstructorBiographyEntries = {
  __typename?: 'InstructorBiographyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type InstructorBiographyLinks = {
  __typename?: 'InstructorBiographyLinks';
  assets: InstructorBiographyAssets;
  entries: InstructorBiographyEntries;
  resources: InstructorBiographyResources;
};

export type InstructorBiographyResources = {
  __typename?: 'InstructorBiographyResources';
  block: Array<InstructorBiographyResourcesBlock>;
  hyperlink: Array<InstructorBiographyResourcesHyperlink>;
  inline: Array<InstructorBiographyResourcesInline>;
};

export type InstructorBiographyResourcesBlock = ResourceLink & {
  __typename?: 'InstructorBiographyResourcesBlock';
  sys: ResourceSys;
};

export type InstructorBiographyResourcesHyperlink = ResourceLink & {
  __typename?: 'InstructorBiographyResourcesHyperlink';
  sys: ResourceSys;
};

export type InstructorBiographyResourcesInline = ResourceLink & {
  __typename?: 'InstructorBiographyResourcesInline';
  sys: ResourceSys;
};

export type InstructorCollection = {
  __typename?: 'InstructorCollection';
  items: Array<Maybe<Instructor>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type InstructorCursorCollection = {
  __typename?: 'InstructorCursorCollection';
  items: Array<Maybe<Instructor>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type InstructorFilter = {
  AND?: InputMaybe<Array<InputMaybe<InstructorFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InstructorFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  biography_contains?: InputMaybe<Scalars['String']['input']>;
  biography_exists?: InputMaybe<Scalars['Boolean']['input']>;
  biography_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  pronouns_contains?: InputMaybe<Scalars['String']['input']>;
  pronouns_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pronouns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pronouns_not?: InputMaybe<Scalars['String']['input']>;
  pronouns_not_contains?: InputMaybe<Scalars['String']['input']>;
  pronouns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type InstructorLinkingCollections = {
  __typename?: 'InstructorLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
};


export type InstructorLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type InstructorLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type InstructorLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InstructorLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type InstructorLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InstructorLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum InstructorLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum InstructorLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum InstructorOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PronounsAsc = 'pronouns_ASC',
  PronounsDesc = 'pronouns_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/landAcknowledgement) */
export type LandAcknowledgement = Entry & _Node & {
  __typename?: 'LandAcknowledgement';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<LandAcknowledgementLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/landAcknowledgement) */
export type LandAcknowledgementLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/landAcknowledgement) */
export type LandAcknowledgementTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/landAcknowledgement) */
export type LandAcknowledgementTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandAcknowledgementCollection = {
  __typename?: 'LandAcknowledgementCollection';
  items: Array<Maybe<LandAcknowledgement>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LandAcknowledgementCursorCollection = {
  __typename?: 'LandAcknowledgementCursorCollection';
  items: Array<Maybe<LandAcknowledgement>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type LandAcknowledgementFilter = {
  AND?: InputMaybe<Array<InputMaybe<LandAcknowledgementFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LandAcknowledgementFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LandAcknowledgementLinkingCollections = {
  __typename?: 'LandAcknowledgementLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  footerCollection?: Maybe<FooterCollection>;
  footerCursorCollection?: Maybe<FooterCursorCollection>;
};


export type LandAcknowledgementLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LandAcknowledgementLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LandAcknowledgementLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandAcknowledgementLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LandAcknowledgementLinkingCollectionsFooterCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandAcknowledgementLinkingCollectionsFooterCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LandAcknowledgementLinkingCollectionsFooterCollectionOrder {
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LandAcknowledgementLinkingCollectionsFooterCursorCollectionOrder {
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LandAcknowledgementOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/levelRequirement) */
export type LevelRequirement = Entry & _Node & {
  __typename?: 'LevelRequirement';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<LevelRequirementDescription>;
  linkedFrom?: Maybe<LevelRequirementLinkingCollections>;
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/levelRequirement) */
export type LevelRequirementDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/levelRequirement) */
export type LevelRequirementLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/levelRequirement) */
export type LevelRequirementSkillsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/levelRequirement) */
export type LevelRequirementTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LevelRequirementCollection = {
  __typename?: 'LevelRequirementCollection';
  items: Array<Maybe<LevelRequirement>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LevelRequirementCursorCollection = {
  __typename?: 'LevelRequirementCursorCollection';
  items: Array<Maybe<LevelRequirement>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type LevelRequirementDescription = {
  __typename?: 'LevelRequirementDescription';
  json: Scalars['JSON']['output'];
  links: LevelRequirementDescriptionLinks;
};

export type LevelRequirementDescriptionAssets = {
  __typename?: 'LevelRequirementDescriptionAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type LevelRequirementDescriptionEntries = {
  __typename?: 'LevelRequirementDescriptionEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type LevelRequirementDescriptionLinks = {
  __typename?: 'LevelRequirementDescriptionLinks';
  assets: LevelRequirementDescriptionAssets;
  entries: LevelRequirementDescriptionEntries;
  resources: LevelRequirementDescriptionResources;
};

export type LevelRequirementDescriptionResources = {
  __typename?: 'LevelRequirementDescriptionResources';
  block: Array<LevelRequirementDescriptionResourcesBlock>;
  hyperlink: Array<LevelRequirementDescriptionResourcesHyperlink>;
  inline: Array<LevelRequirementDescriptionResourcesInline>;
};

export type LevelRequirementDescriptionResourcesBlock = ResourceLink & {
  __typename?: 'LevelRequirementDescriptionResourcesBlock';
  sys: ResourceSys;
};

export type LevelRequirementDescriptionResourcesHyperlink = ResourceLink & {
  __typename?: 'LevelRequirementDescriptionResourcesHyperlink';
  sys: ResourceSys;
};

export type LevelRequirementDescriptionResourcesInline = ResourceLink & {
  __typename?: 'LevelRequirementDescriptionResourcesInline';
  sys: ResourceSys;
};

export type LevelRequirementFilter = {
  AND?: InputMaybe<Array<InputMaybe<LevelRequirementFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LevelRequirementFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  skills_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LevelRequirementLinkingCollections = {
  __typename?: 'LevelRequirementLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
};


export type LevelRequirementLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LevelRequirementLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LevelRequirementLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LevelRequirementLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LevelRequirementLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LevelRequirementLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LevelRequirementLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LevelRequirementLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LevelRequirementOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/link) */
export type Link = Entry & _Node & {
  __typename?: 'Link';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  href?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<LinkLinkingCollections>;
  sys: Sys;
  text?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/link) */
export type LinkHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/link) */
export type LinkTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LinkCollection = {
  __typename?: 'LinkCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type LinkCursorCollection = {
  __typename?: 'LinkCursorCollection';
  items: Array<Maybe<Link>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type LinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LinkFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type LinkLinkingCollections = {
  __typename?: 'LinkLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
  featuredSlideCollection?: Maybe<FeaturedSlideCollection>;
  featuredSlideCursorCollection?: Maybe<FeaturedSlideCursorCollection>;
  footerCollection?: Maybe<FooterCollection>;
  footerCursorCollection?: Maybe<FooterCursorCollection>;
};


export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsFeaturedSlideCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsFeaturedSlideCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsFeaturedSlideCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsFeaturedSlideCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type LinkLinkingCollectionsFooterCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkLinkingCollectionsFooterCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum LinkLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LinkLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum LinkLinkingCollectionsFeaturedSlideCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum LinkLinkingCollectionsFeaturedSlideCursorCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export enum LinkLinkingCollectionsFooterCollectionOrder {
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkLinkingCollectionsFooterCursorCollectionOrder {
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum LinkOrder {
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC'
}

export type Location = {
  __typename?: 'Location';
  lat?: Maybe<Scalars['Float']['output']>;
  lon?: Maybe<Scalars['Float']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/mission) */
export type Mission = Entry & _Node & {
  __typename?: 'Mission';
  _id: Scalars['ID']['output'];
  content?: Maybe<MissionContent>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<MissionLinkingCollections>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/mission) */
export type MissionContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/mission) */
export type MissionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/mission) */
export type MissionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MissionCollection = {
  __typename?: 'MissionCollection';
  items: Array<Maybe<Mission>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type MissionContent = {
  __typename?: 'MissionContent';
  json: Scalars['JSON']['output'];
  links: MissionContentLinks;
};

export type MissionContentAssets = {
  __typename?: 'MissionContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type MissionContentEntries = {
  __typename?: 'MissionContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type MissionContentLinks = {
  __typename?: 'MissionContentLinks';
  assets: MissionContentAssets;
  entries: MissionContentEntries;
  resources: MissionContentResources;
};

export type MissionContentResources = {
  __typename?: 'MissionContentResources';
  block: Array<MissionContentResourcesBlock>;
  hyperlink: Array<MissionContentResourcesHyperlink>;
  inline: Array<MissionContentResourcesInline>;
};

export type MissionContentResourcesBlock = ResourceLink & {
  __typename?: 'MissionContentResourcesBlock';
  sys: ResourceSys;
};

export type MissionContentResourcesHyperlink = ResourceLink & {
  __typename?: 'MissionContentResourcesHyperlink';
  sys: ResourceSys;
};

export type MissionContentResourcesInline = ResourceLink & {
  __typename?: 'MissionContentResourcesInline';
  sys: ResourceSys;
};

export type MissionCursorCollection = {
  __typename?: 'MissionCursorCollection';
  items: Array<Maybe<Mission>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type MissionFilter = {
  AND?: InputMaybe<Array<InputMaybe<MissionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<MissionFilter>>>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type MissionLinkingCollections = {
  __typename?: 'MissionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type MissionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MissionLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum MissionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/openGraphImage) */
export type OpenGraphImage = Entry & _Node & {
  __typename?: 'OpenGraphImage';
  _id: Scalars['ID']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<Asset>;
  linkedFrom?: Maybe<OpenGraphImageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/openGraphImage) */
export type OpenGraphImageAltArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/openGraphImage) */
export type OpenGraphImageDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/openGraphImage) */
export type OpenGraphImageImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/openGraphImage) */
export type OpenGraphImageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type OpenGraphImageCollection = {
  __typename?: 'OpenGraphImageCollection';
  items: Array<Maybe<OpenGraphImage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type OpenGraphImageCursorCollection = {
  __typename?: 'OpenGraphImageCursorCollection';
  items: Array<Maybe<OpenGraphImage>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type OpenGraphImageFilter = {
  AND?: InputMaybe<Array<InputMaybe<OpenGraphImageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<OpenGraphImageFilter>>>;
  alt?: InputMaybe<Scalars['String']['input']>;
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  alt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alt_not?: InputMaybe<Scalars['String']['input']>;
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type OpenGraphImageLinkingCollections = {
  __typename?: 'OpenGraphImageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  pageMetadataCursorCollection?: Maybe<PageMetadataCursorCollection>;
};


export type OpenGraphImageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OpenGraphImageLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OpenGraphImageLinkingCollectionsPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpenGraphImageLinkingCollectionsPageMetadataCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type OpenGraphImageLinkingCollectionsPageMetadataCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpenGraphImageLinkingCollectionsPageMetadataCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum OpenGraphImageLinkingCollectionsPageMetadataCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum OpenGraphImageLinkingCollectionsPageMetadataCursorCollectionOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum OpenGraphImageOrder {
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type Page = Entry & _Node & {
  __typename?: 'Page';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  entryTitle?: Maybe<Scalars['String']['output']>;
  footer?: Maybe<Footer>;
  hero?: Maybe<Hero>;
  linkedFrom?: Maybe<PageLinkingCollections>;
  pageMetaData?: Maybe<PageMetadata>;
  sectionsCollection?: Maybe<PageSectionsCollection>;
  sectionsCursorCollection?: Maybe<PageSectionsCursorCollection>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PageEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PageFooterArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PageHeroArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PagePageMetaDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PageSectionsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PageSectionsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionsCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageCollection = {
  __typename?: 'PageCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageCursorCollection = {
  __typename?: 'PageCursorCollection';
  items: Array<Maybe<Page>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  footer?: InputMaybe<CfFooterNestedFilter>;
  footer_exists?: InputMaybe<Scalars['Boolean']['input']>;
  hero?: InputMaybe<CfHeroNestedFilter>;
  hero_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageMetaData?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetaData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sections?: InputMaybe<CfPageSectionNestedFilter>;
  sectionsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageMetadata) */
export type PageMetadata = Entry & _Node & {
  __typename?: 'PageMetadata';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  favicon?: Maybe<Asset>;
  linkedFrom?: Maybe<PageMetadataLinkingCollections>;
  openGraphImage?: Maybe<OpenGraphImage>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageMetadata) */
export type PageMetadataDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageMetadata) */
export type PageMetadataFaviconArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageMetadata) */
export type PageMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageMetadata) */
export type PageMetadataOpenGraphImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OpenGraphImageFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageMetadata) */
export type PageMetadataTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageMetadataCollection = {
  __typename?: 'PageMetadataCollection';
  items: Array<Maybe<PageMetadata>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageMetadataCursorCollection = {
  __typename?: 'PageMetadataCursorCollection';
  items: Array<Maybe<PageMetadata>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PageMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  favicon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphImage?: InputMaybe<CfOpenGraphImageNestedFilter>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageMetadataLinkingCollections = {
  __typename?: 'PageMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
  staticPageCollection?: Maybe<StaticPageCollection>;
  staticPageCursorCollection?: Maybe<StaticPageCursorCollection>;
};


export type PageMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMetadataLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMetadataLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMetadataLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMetadataLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMetadataLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMetadataLinkingCollectionsStaticPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsStaticPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageMetadataLinkingCollectionsStaticPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataLinkingCollectionsStaticPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageMetadataLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageMetadataLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageMetadataLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageMetadataLinkingCollectionsPageCursorCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageMetadataLinkingCollectionsStaticPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageMetadataLinkingCollectionsStaticPageCursorCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageMetadataOrder {
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PageOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSection = Entry & _Node & {
  __typename?: 'PageSection';
  _id: Scalars['ID']['output'];
  anchor?: Maybe<Scalars['String']['output']>;
  componentsCollection?: Maybe<PageSectionComponentsCollection>;
  componentsCursorCollection?: Maybe<PageSectionComponentsCursorCollection>;
  content?: Maybe<PageSectionContent>;
  contentfulMetadata: ContentfulMetadata;
  helpText?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PageSectionLinkingCollections>;
  sectionName?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionAnchorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionComponentsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionComponentsCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionHelpTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/pageSection) */
export type PageSectionTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection';
  items: Array<Maybe<PageSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageSectionComponentsCollection = {
  __typename?: 'PageSectionComponentsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageSectionComponentsCursorCollection = {
  __typename?: 'PageSectionComponentsCursorCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PageSectionContent = {
  __typename?: 'PageSectionContent';
  json: Scalars['JSON']['output'];
  links: PageSectionContentLinks;
};

export type PageSectionContentAssets = {
  __typename?: 'PageSectionContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type PageSectionContentEntries = {
  __typename?: 'PageSectionContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type PageSectionContentLinks = {
  __typename?: 'PageSectionContentLinks';
  assets: PageSectionContentAssets;
  entries: PageSectionContentEntries;
  resources: PageSectionContentResources;
};

export type PageSectionContentResources = {
  __typename?: 'PageSectionContentResources';
  block: Array<PageSectionContentResourcesBlock>;
  hyperlink: Array<PageSectionContentResourcesHyperlink>;
  inline: Array<PageSectionContentResourcesInline>;
};

export type PageSectionContentResourcesBlock = ResourceLink & {
  __typename?: 'PageSectionContentResourcesBlock';
  sys: ResourceSys;
};

export type PageSectionContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageSectionContentResourcesHyperlink';
  sys: ResourceSys;
};

export type PageSectionContentResourcesInline = ResourceLink & {
  __typename?: 'PageSectionContentResourcesInline';
  sys: ResourceSys;
};

export type PageSectionCursorCollection = {
  __typename?: 'PageSectionCursorCollection';
  items: Array<Maybe<PageSection>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PageSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionFilter>>>;
  anchor?: InputMaybe<Scalars['String']['input']>;
  anchor_contains?: InputMaybe<Scalars['String']['input']>;
  anchor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  anchor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  anchor_not?: InputMaybe<Scalars['String']['input']>;
  anchor_not_contains?: InputMaybe<Scalars['String']['input']>;
  anchor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  helpText?: InputMaybe<Scalars['String']['input']>;
  helpText_contains?: InputMaybe<Scalars['String']['input']>;
  helpText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  helpText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  helpText_not?: InputMaybe<Scalars['String']['input']>;
  helpText_not_contains?: InputMaybe<Scalars['String']['input']>;
  helpText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  sectionName_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName_not?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PageSectionLinkingCollections = {
  __typename?: 'PageSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
};


export type PageSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageSectionLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageSectionLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionLinkingCollectionsPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PageSectionLinkingCollectionsPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionLinkingCollectionsPageCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PageSectionLinkingCollectionsPageCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageSectionLinkingCollectionsPageCursorCollectionOrder {
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageSectionOrder {
  AnchorAsc = 'anchor_ASC',
  AnchorDesc = 'anchor_DESC',
  HelpTextAsc = 'helpText_ASC',
  HelpTextDesc = 'helpText_DESC',
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageSectionsCollection = {
  __typename?: 'PageSectionsCollection';
  items: Array<Maybe<PageSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum PageSectionsCollectionOrder {
  AnchorAsc = 'anchor_ASC',
  AnchorDesc = 'anchor_DESC',
  HelpTextAsc = 'helpText_ASC',
  HelpTextDesc = 'helpText_DESC',
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type PageSectionsCursorCollection = {
  __typename?: 'PageSectionsCursorCollection';
  items: Array<Maybe<PageSection>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export enum PageSectionsCursorCollectionOrder {
  AnchorAsc = 'anchor_ASC',
  AnchorDesc = 'anchor_DESC',
  HelpTextAsc = 'helpText_ASC',
  HelpTextDesc = 'helpText_DESC',
  SectionNameAsc = 'sectionName_ASC',
  SectionNameDesc = 'sectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/partners) */
export type Partners = Entry & _Node & {
  __typename?: 'Partners';
  _id: Scalars['ID']['output'];
  contentfulMetadata: ContentfulMetadata;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<PartnersLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/partners) */
export type PartnersLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/partners) */
export type PartnersLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/partners) */
export type PartnersLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/partners) */
export type PartnersTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PartnersCollection = {
  __typename?: 'PartnersCollection';
  items: Array<Maybe<Partners>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PartnersCursorCollection = {
  __typename?: 'PartnersCursorCollection';
  items: Array<Maybe<Partners>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PartnersFilter = {
  AND?: InputMaybe<Array<InputMaybe<PartnersFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PartnersFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PartnersLinkingCollections = {
  __typename?: 'PartnersLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
};


export type PartnersLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PartnersLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PartnersLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PartnersLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PartnersLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PartnersLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PartnersLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PartnersLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PartnersOrder {
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type Price = Entry & _Node & {
  __typename?: 'Price';
  _id: Scalars['ID']['output'];
  amount?: Maybe<Scalars['Int']['output']>;
  batch?: Maybe<Scalars['Int']['output']>;
  contentfulMetadata: ContentfulMetadata;
  endTime?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<PriceLinkingCollections>;
  startTime?: Maybe<Scalars['DateTime']['output']>;
  sys: Sys;
  tier?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type PriceAmountArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type PriceBatchArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type PriceEndTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type PriceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type PriceStartTimeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type PriceTierArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/price) */
export type PriceTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PriceCollection = {
  __typename?: 'PriceCollection';
  items: Array<Maybe<Price>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PriceCursorCollection = {
  __typename?: 'PriceCursorCollection';
  items: Array<Maybe<Price>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type PriceFilter = {
  AND?: InputMaybe<Array<InputMaybe<PriceFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PriceFilter>>>;
  amount?: InputMaybe<Scalars['Int']['input']>;
  amount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  amount_gt?: InputMaybe<Scalars['Int']['input']>;
  amount_gte?: InputMaybe<Scalars['Int']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  amount_lt?: InputMaybe<Scalars['Int']['input']>;
  amount_lte?: InputMaybe<Scalars['Int']['input']>;
  amount_not?: InputMaybe<Scalars['Int']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  batch?: InputMaybe<Scalars['Int']['input']>;
  batch_exists?: InputMaybe<Scalars['Boolean']['input']>;
  batch_gt?: InputMaybe<Scalars['Int']['input']>;
  batch_gte?: InputMaybe<Scalars['Int']['input']>;
  batch_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  batch_lt?: InputMaybe<Scalars['Int']['input']>;
  batch_lte?: InputMaybe<Scalars['Int']['input']>;
  batch_not?: InputMaybe<Scalars['Int']['input']>;
  batch_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tier?: InputMaybe<Scalars['String']['input']>;
  tier_contains?: InputMaybe<Scalars['String']['input']>;
  tier_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tier_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tier_not?: InputMaybe<Scalars['String']['input']>;
  tier_not_contains?: InputMaybe<Scalars['String']['input']>;
  tier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PriceLinkingCollections = {
  __typename?: 'PriceLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
};


export type PriceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PriceLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PriceLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PriceLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type PriceLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PriceLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum PriceLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PriceLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum PriceOrder {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  BatchAsc = 'batch_ASC',
  BatchDesc = 'batch_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  StartTimeAsc = 'startTime_ASC',
  StartTimeDesc = 'startTime_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TierAsc = 'tier_ASC',
  TierDesc = 'tier_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  _nodes: Array<Maybe<_Node>>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  assetCursorCollection?: Maybe<AssetCursorCollection>;
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  event?: Maybe<Event>;
  eventBlock?: Maybe<EventBlock>;
  eventBlockCollection?: Maybe<EventBlockCollection>;
  eventBlockCursorCollection?: Maybe<EventBlockCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
  featuredSlide?: Maybe<FeaturedSlide>;
  featuredSlideCollection?: Maybe<FeaturedSlideCollection>;
  featuredSlideCursorCollection?: Maybe<FeaturedSlideCursorCollection>;
  footer?: Maybe<Footer>;
  footerCollection?: Maybe<FooterCollection>;
  footerCursorCollection?: Maybe<FooterCursorCollection>;
  hero?: Maybe<Hero>;
  heroCollection?: Maybe<HeroCollection>;
  heroCursorCollection?: Maybe<HeroCursorCollection>;
  instructor?: Maybe<Instructor>;
  instructorCollection?: Maybe<InstructorCollection>;
  instructorCursorCollection?: Maybe<InstructorCursorCollection>;
  landAcknowledgement?: Maybe<LandAcknowledgement>;
  landAcknowledgementCollection?: Maybe<LandAcknowledgementCollection>;
  landAcknowledgementCursorCollection?: Maybe<LandAcknowledgementCursorCollection>;
  levelRequirement?: Maybe<LevelRequirement>;
  levelRequirementCollection?: Maybe<LevelRequirementCollection>;
  levelRequirementCursorCollection?: Maybe<LevelRequirementCursorCollection>;
  link?: Maybe<Link>;
  linkCollection?: Maybe<LinkCollection>;
  linkCursorCollection?: Maybe<LinkCursorCollection>;
  mission?: Maybe<Mission>;
  missionCollection?: Maybe<MissionCollection>;
  missionCursorCollection?: Maybe<MissionCursorCollection>;
  openGraphImage?: Maybe<OpenGraphImage>;
  openGraphImageCollection?: Maybe<OpenGraphImageCollection>;
  openGraphImageCursorCollection?: Maybe<OpenGraphImageCursorCollection>;
  page?: Maybe<Page>;
  pageCollection?: Maybe<PageCollection>;
  pageCursorCollection?: Maybe<PageCursorCollection>;
  pageMetadata?: Maybe<PageMetadata>;
  pageMetadataCollection?: Maybe<PageMetadataCollection>;
  pageMetadataCursorCollection?: Maybe<PageMetadataCursorCollection>;
  pageSection?: Maybe<PageSection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  pageSectionCursorCollection?: Maybe<PageSectionCursorCollection>;
  partners?: Maybe<Partners>;
  partnersCollection?: Maybe<PartnersCollection>;
  partnersCursorCollection?: Maybe<PartnersCursorCollection>;
  price?: Maybe<Price>;
  priceCollection?: Maybe<PriceCollection>;
  priceCursorCollection?: Maybe<PriceCursorCollection>;
  socialMedia?: Maybe<SocialMedia>;
  socialMediaCollection?: Maybe<SocialMediaCollection>;
  socialMediaCursorCollection?: Maybe<SocialMediaCursorCollection>;
  staticPage?: Maybe<StaticPage>;
  staticPageCollection?: Maybe<StaticPageCollection>;
  staticPageCursorCollection?: Maybe<StaticPageCursorCollection>;
  venue?: Maybe<Venue>;
  venueCollection?: Maybe<VenueCollection>;
  venueCursorCollection?: Maybe<VenueCursorCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryAssetCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryEventArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryEventBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventBlockFilter>;
};


export type QueryEventBlockCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventBlockOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventBlockFilter>;
};


export type QueryEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventFilter>;
};


export type QueryEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EventOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<EventFilter>;
};


export type QueryFeaturedSlideArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFeaturedSlideCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedSlideOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FeaturedSlideFilter>;
};


export type QueryFeaturedSlideCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FeaturedSlideOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FeaturedSlideFilter>;
};


export type QueryFooterArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryFooterCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<FooterOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<FooterFilter>;
};


export type QueryHeroArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryHeroCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroFilter>;
};


export type QueryHeroCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<HeroOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<HeroFilter>;
};


export type QueryInstructorArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryInstructorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InstructorOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InstructorFilter>;
};


export type QueryInstructorCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<InstructorOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<InstructorFilter>;
};


export type QueryLandAcknowledgementArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLandAcknowledgementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandAcknowledgementOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LandAcknowledgementFilter>;
};


export type QueryLandAcknowledgementCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LandAcknowledgementOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LandAcknowledgementFilter>;
};


export type QueryLevelRequirementArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLevelRequirementCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LevelRequirementOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LevelRequirementFilter>;
};


export type QueryLevelRequirementCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LevelRequirementOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LevelRequirementFilter>;
};


export type QueryLinkArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


export type QueryLinkCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<LinkFilter>;
};


export type QueryMissionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMissionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MissionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MissionFilter>;
};


export type QueryMissionCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<MissionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<MissionFilter>;
};


export type QueryOpenGraphImageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryOpenGraphImageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpenGraphImageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OpenGraphImageFilter>;
};


export type QueryOpenGraphImageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<OpenGraphImageOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<OpenGraphImageFilter>;
};


export type QueryPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageFilter>;
};


export type QueryPageMetadataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


export type QueryPageMetadataCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageMetadataOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


export type QueryPageSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};


export type QueryPageSectionCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};


export type QueryPartnersArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPartnersCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PartnersOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PartnersFilter>;
};


export type QueryPartnersCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PartnersOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PartnersFilter>;
};


export type QueryPriceArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPriceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PriceOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PriceFilter>;
};


export type QueryPriceCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PriceOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PriceFilter>;
};


export type QuerySocialMediaArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySocialMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SocialMediaFilter>;
};


export type QuerySocialMediaCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SocialMediaFilter>;
};


export type QueryStaticPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryStaticPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StaticPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StaticPageFilter>;
};


export type QueryStaticPageCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<StaticPageOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<StaticPageFilter>;
};


export type QueryVenueArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryVenueCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VenueOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VenueFilter>;
};


export type QueryVenueCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VenueOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<VenueFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/socialMedia) */
export type SocialMedia = Entry & _Node & {
  __typename?: 'SocialMedia';
  _id: Scalars['ID']['output'];
  accessibilityDescription?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  entryTitle?: Maybe<Scalars['String']['output']>;
  href?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<SocialMediaLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/socialMedia) */
export type SocialMediaAccessibilityDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/socialMedia) */
export type SocialMediaEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/socialMedia) */
export type SocialMediaHrefArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/socialMedia) */
export type SocialMediaLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/socialMedia) */
export type SocialMediaLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SocialMediaCollection = {
  __typename?: 'SocialMediaCollection';
  items: Array<Maybe<SocialMedia>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SocialMediaCursorCollection = {
  __typename?: 'SocialMediaCursorCollection';
  items: Array<Maybe<SocialMedia>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type SocialMediaFilter = {
  AND?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SocialMediaFilter>>>;
  accessibilityDescription?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_contains?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  accessibilityDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  accessibilityDescription_not?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type SocialMediaLinkingCollections = {
  __typename?: 'SocialMediaLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  footerCollection?: Maybe<FooterCollection>;
  footerCursorCollection?: Maybe<FooterCursorCollection>;
};


export type SocialMediaLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SocialMediaLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SocialMediaLinkingCollectionsFooterCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaLinkingCollectionsFooterCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SocialMediaLinkingCollectionsFooterCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SocialMediaLinkingCollectionsFooterCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum SocialMediaLinkingCollectionsFooterCollectionOrder {
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SocialMediaLinkingCollectionsFooterCursorCollectionOrder {
  ContactAsc = 'contact_ASC',
  ContactDesc = 'contact_DESC',
  CopyrightAsc = 'copyright_ASC',
  CopyrightDesc = 'copyright_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SocialMediaOrder {
  AccessibilityDescriptionAsc = 'accessibilityDescription_ASC',
  AccessibilityDescriptionDesc = 'accessibilityDescription_DESC',
  EntryTitleAsc = 'entryTitle_ASC',
  EntryTitleDesc = 'entryTitle_DESC',
  HrefAsc = 'href_ASC',
  HrefDesc = 'href_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/staticPage) */
export type StaticPage = Entry & _Node & {
  __typename?: 'StaticPage';
  _id: Scalars['ID']['output'];
  body?: Maybe<StaticPageBody>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<StaticPageLinkingCollections>;
  pageMetaData?: Maybe<PageMetadata>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/staticPage) */
export type StaticPageBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/staticPage) */
export type StaticPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/staticPage) */
export type StaticPagePageMetaDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<PageMetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/staticPage) */
export type StaticPageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/staticPage) */
export type StaticPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StaticPageBody = {
  __typename?: 'StaticPageBody';
  json: Scalars['JSON']['output'];
  links: StaticPageBodyLinks;
};

export type StaticPageBodyAssets = {
  __typename?: 'StaticPageBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type StaticPageBodyEntries = {
  __typename?: 'StaticPageBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type StaticPageBodyLinks = {
  __typename?: 'StaticPageBodyLinks';
  assets: StaticPageBodyAssets;
  entries: StaticPageBodyEntries;
  resources: StaticPageBodyResources;
};

export type StaticPageBodyResources = {
  __typename?: 'StaticPageBodyResources';
  block: Array<StaticPageBodyResourcesBlock>;
  hyperlink: Array<StaticPageBodyResourcesHyperlink>;
  inline: Array<StaticPageBodyResourcesInline>;
};

export type StaticPageBodyResourcesBlock = ResourceLink & {
  __typename?: 'StaticPageBodyResourcesBlock';
  sys: ResourceSys;
};

export type StaticPageBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'StaticPageBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type StaticPageBodyResourcesInline = ResourceLink & {
  __typename?: 'StaticPageBodyResourcesInline';
  sys: ResourceSys;
};

export type StaticPageCollection = {
  __typename?: 'StaticPageCollection';
  items: Array<Maybe<StaticPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type StaticPageCursorCollection = {
  __typename?: 'StaticPageCursorCollection';
  items: Array<Maybe<StaticPage>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type StaticPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<StaticPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<StaticPageFilter>>>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageMetaData?: InputMaybe<CfPageMetadataNestedFilter>;
  pageMetaData_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StaticPageLinkingCollections = {
  __typename?: 'StaticPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
};


export type StaticPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type StaticPageLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum StaticPageOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept';
  id?: Maybe<Scalars['String']['output']>;
};

export type TimelineFilterInput = {
  /** Preview content starting from a given release date */
  release_lte?: InputMaybe<Scalars['String']['input']>;
  /** Preview content starting from a given timestamp */
  timestamp_lte?: InputMaybe<Scalars['DateTime']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/venue) */
export type Venue = Entry & _Node & {
  __typename?: 'Venue';
  _id: Scalars['ID']['output'];
  address?: Maybe<Location>;
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<VenueLinkingCollections>;
  name?: Maybe<Scalars['String']['output']>;
  purpose?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  venueAddress?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/venue) */
export type VenueAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/venue) */
export type VenueLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/venue) */
export type VenueNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/venue) */
export type VenuePurposeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/ix0cnzqgli1c/content_types/venue) */
export type VenueVenueAddressArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VenueCollection = {
  __typename?: 'VenueCollection';
  items: Array<Maybe<Venue>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VenueCursorCollection = {
  __typename?: 'VenueCursorCollection';
  items: Array<Maybe<Venue>>;
  limit: Scalars['Int']['output'];
  pages: CursorPages;
};

export type VenueFilter = {
  AND?: InputMaybe<Array<InputMaybe<VenueFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<VenueFilter>>>;
  address_exists?: InputMaybe<Scalars['Boolean']['input']>;
  address_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  address_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  purpose_contains?: InputMaybe<Scalars['String']['input']>;
  purpose_exists?: InputMaybe<Scalars['Boolean']['input']>;
  purpose_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  purpose_not?: InputMaybe<Scalars['String']['input']>;
  purpose_not_contains?: InputMaybe<Scalars['String']['input']>;
  purpose_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  venueAddress?: InputMaybe<Scalars['String']['input']>;
  venueAddress_contains?: InputMaybe<Scalars['String']['input']>;
  venueAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  venueAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueAddress_not?: InputMaybe<Scalars['String']['input']>;
  venueAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  venueAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VenueLinkingCollections = {
  __typename?: 'VenueLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  entryCursorCollection?: Maybe<EntryCursorCollection>;
  eventCollection?: Maybe<EventCollection>;
  eventCursorCollection?: Maybe<EventCursorCollection>;
};


export type VenueLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VenueLinkingCollectionsEntryCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VenueLinkingCollectionsEventCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VenueLinkingCollectionsEventCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};


export type VenueLinkingCollectionsEventCursorCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<VenueLinkingCollectionsEventCursorCollectionOrder>>>;
  pageNext?: InputMaybe<Scalars['String']['input']>;
  pagePrev?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  useFallbackLocale?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum VenueLinkingCollectionsEventCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum VenueLinkingCollectionsEventCursorCollectionOrder {
  ClosedTextAsc = 'closedText_ASC',
  ClosedTextDesc = 'closedText_DESC',
  DarkAsc = 'dark_ASC',
  DarkDesc = 'dark_DESC',
  EndDateAsc = 'endDate_ASC',
  EndDateDesc = 'endDate_DESC',
  RegistrationsOpenedAsc = 'registrationsOpened_ASC',
  RegistrationsOpenedDesc = 'registrationsOpened_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  StartDateAsc = 'startDate_ASC',
  StartDateDesc = 'startDate_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TaglineAsc = 'tagline_ASC',
  TaglineDesc = 'tagline_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export enum VenueOrder {
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PurposeAsc = 'purpose_ASC',
  PurposeDesc = 'purpose_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  VenueAddressAsc = 'venueAddress_ASC',
  VenueAddressDesc = 'venueAddress_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfEventBlockNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfEventBlockNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfEventBlockNestedFilter>>>;
  blockType?: InputMaybe<Scalars['String']['input']>;
  blockType_contains?: InputMaybe<Scalars['String']['input']>;
  blockType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blockType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blockType_not?: InputMaybe<Scalars['String']['input']>;
  blockType_not_contains?: InputMaybe<Scalars['String']['input']>;
  blockType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  subtitle?: InputMaybe<Scalars['String']['input']>;
  subtitle_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subtitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subtitle_not?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  subtitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfFooterNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfFooterNestedFilter>>>;
  contact?: InputMaybe<Scalars['String']['input']>;
  contactLink_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contact_contains?: InputMaybe<Scalars['String']['input']>;
  contact_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contact_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contact_not?: InputMaybe<Scalars['String']['input']>;
  contact_not_contains?: InputMaybe<Scalars['String']['input']>;
  contact_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  copyright?: InputMaybe<Scalars['String']['input']>;
  copyright_contains?: InputMaybe<Scalars['String']['input']>;
  copyright_exists?: InputMaybe<Scalars['Boolean']['input']>;
  copyright_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  copyright_not?: InputMaybe<Scalars['String']['input']>;
  copyright_not_contains?: InputMaybe<Scalars['String']['input']>;
  copyright_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  donateButton_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  landAcknowledgement_exists?: InputMaybe<Scalars['Boolean']['input']>;
  socialMediasCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfHeroNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfHeroNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfHeroNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfInstructorNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfInstructorNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfInstructorNestedFilter>>>;
  avatar_exists?: InputMaybe<Scalars['Boolean']['input']>;
  biography_contains?: InputMaybe<Scalars['String']['input']>;
  biography_exists?: InputMaybe<Scalars['Boolean']['input']>;
  biography_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pronouns?: InputMaybe<Scalars['String']['input']>;
  pronouns_contains?: InputMaybe<Scalars['String']['input']>;
  pronouns_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pronouns_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pronouns_not?: InputMaybe<Scalars['String']['input']>;
  pronouns_not_contains?: InputMaybe<Scalars['String']['input']>;
  pronouns_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfLandAcknowledgementNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLandAcknowledgementNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLandAcknowledgementNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfLevelRequirementNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLevelRequirementNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLevelRequirementNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  skills_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  skills_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfLinkNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfLinkNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  text?: InputMaybe<Scalars['String']['input']>;
  text_contains?: InputMaybe<Scalars['String']['input']>;
  text_exists?: InputMaybe<Scalars['Boolean']['input']>;
  text_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  text_not?: InputMaybe<Scalars['String']['input']>;
  text_not_contains?: InputMaybe<Scalars['String']['input']>;
  text_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfOpenGraphImageNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfOpenGraphImageNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfOpenGraphImageNestedFilter>>>;
  alt?: InputMaybe<Scalars['String']['input']>;
  alt_contains?: InputMaybe<Scalars['String']['input']>;
  alt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  alt_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  alt_not?: InputMaybe<Scalars['String']['input']>;
  alt_not_contains?: InputMaybe<Scalars['String']['input']>;
  alt_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  image_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfPageMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageMetadataNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  favicon_exists?: InputMaybe<Scalars['Boolean']['input']>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageSectionNestedFilter>>>;
  anchor?: InputMaybe<Scalars['String']['input']>;
  anchor_contains?: InputMaybe<Scalars['String']['input']>;
  anchor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  anchor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  anchor_not?: InputMaybe<Scalars['String']['input']>;
  anchor_not_contains?: InputMaybe<Scalars['String']['input']>;
  anchor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  componentsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_contains?: InputMaybe<Scalars['String']['input']>;
  content_exists?: InputMaybe<Scalars['Boolean']['input']>;
  content_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  helpText?: InputMaybe<Scalars['String']['input']>;
  helpText_contains?: InputMaybe<Scalars['String']['input']>;
  helpText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  helpText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  helpText_not?: InputMaybe<Scalars['String']['input']>;
  helpText_not_contains?: InputMaybe<Scalars['String']['input']>;
  helpText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName?: InputMaybe<Scalars['String']['input']>;
  sectionName_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sectionName_not?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  sectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPartnersNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPartnersNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPartnersNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPriceNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPriceNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPriceNestedFilter>>>;
  amount?: InputMaybe<Scalars['Int']['input']>;
  amount_exists?: InputMaybe<Scalars['Boolean']['input']>;
  amount_gt?: InputMaybe<Scalars['Int']['input']>;
  amount_gte?: InputMaybe<Scalars['Int']['input']>;
  amount_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  amount_lt?: InputMaybe<Scalars['Int']['input']>;
  amount_lte?: InputMaybe<Scalars['Int']['input']>;
  amount_not?: InputMaybe<Scalars['Int']['input']>;
  amount_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  batch?: InputMaybe<Scalars['Int']['input']>;
  batch_exists?: InputMaybe<Scalars['Boolean']['input']>;
  batch_gt?: InputMaybe<Scalars['Int']['input']>;
  batch_gte?: InputMaybe<Scalars['Int']['input']>;
  batch_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  batch_lt?: InputMaybe<Scalars['Int']['input']>;
  batch_lte?: InputMaybe<Scalars['Int']['input']>;
  batch_not?: InputMaybe<Scalars['Int']['input']>;
  batch_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  endTime?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  endTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  endTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  endTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_exists?: InputMaybe<Scalars['Boolean']['input']>;
  startTime_gt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_gte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startTime_lt?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_lte?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not?: InputMaybe<Scalars['DateTime']['input']>;
  startTime_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tier?: InputMaybe<Scalars['String']['input']>;
  tier_contains?: InputMaybe<Scalars['String']['input']>;
  tier_exists?: InputMaybe<Scalars['Boolean']['input']>;
  tier_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tier_not?: InputMaybe<Scalars['String']['input']>;
  tier_not_contains?: InputMaybe<Scalars['String']['input']>;
  tier_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  type_contains?: InputMaybe<Scalars['String']['input']>;
  type_exists?: InputMaybe<Scalars['Boolean']['input']>;
  type_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  type_not?: InputMaybe<Scalars['String']['input']>;
  type_not_contains?: InputMaybe<Scalars['String']['input']>;
  type_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfSocialMediaNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSocialMediaNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSocialMediaNestedFilter>>>;
  accessibilityDescription?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_contains?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  accessibilityDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  accessibilityDescription_not?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  accessibilityDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  entryTitle?: InputMaybe<Scalars['String']['input']>;
  entryTitle_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  entryTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  entryTitle_not?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  entryTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href?: InputMaybe<Scalars['String']['input']>;
  href_contains?: InputMaybe<Scalars['String']['input']>;
  href_exists?: InputMaybe<Scalars['Boolean']['input']>;
  href_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  href_not?: InputMaybe<Scalars['String']['input']>;
  href_not_contains?: InputMaybe<Scalars['String']['input']>;
  href_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfVenueNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfVenueNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfVenueNestedFilter>>>;
  address_exists?: InputMaybe<Scalars['Boolean']['input']>;
  address_within_circle?: InputMaybe<Scalars['Circle']['input']>;
  address_within_rectangle?: InputMaybe<Scalars['Rectangle']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  purpose?: InputMaybe<Scalars['String']['input']>;
  purpose_contains?: InputMaybe<Scalars['String']['input']>;
  purpose_exists?: InputMaybe<Scalars['Boolean']['input']>;
  purpose_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  purpose_not?: InputMaybe<Scalars['String']['input']>;
  purpose_not_contains?: InputMaybe<Scalars['String']['input']>;
  purpose_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  venueAddress?: InputMaybe<Scalars['String']['input']>;
  venueAddress_contains?: InputMaybe<Scalars['String']['input']>;
  venueAddress_exists?: InputMaybe<Scalars['Boolean']['input']>;
  venueAddress_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  venueAddress_not?: InputMaybe<Scalars['String']['input']>;
  venueAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  venueAddress_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type GetAdministratorsSectionQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetAdministratorsSectionQuery = { __typename?: 'Query', pageSection?: { __typename?: 'PageSection', title?: string | null, anchor?: string | null, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<
        | { __typename?: 'Event' }
        | { __typename?: 'EventBlock' }
        | { __typename?: 'FeaturedSlide' }
        | { __typename?: 'Footer' }
        | { __typename?: 'Hero' }
        | { __typename: 'Instructor', name?: string | null, pronouns?: string | null, title?: string | null, sys: { __typename?: 'Sys', id: string }, biography?: { __typename?: 'InstructorBiography', json: any, links: { __typename?: 'InstructorBiographyLinks', assets: { __typename?: 'InstructorBiographyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, avatar?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null }
        | { __typename?: 'LandAcknowledgement' }
        | { __typename?: 'LevelRequirement' }
        | { __typename?: 'Link' }
        | { __typename?: 'Mission' }
        | { __typename?: 'OpenGraphImage' }
        | { __typename?: 'Page' }
        | { __typename?: 'PageMetadata' }
        | { __typename?: 'PageSection' }
        | { __typename?: 'Partners' }
        | { __typename?: 'Price' }
        | { __typename?: 'SocialMedia' }
        | { __typename?: 'StaticPage' }
        | { __typename?: 'Venue' }
       | null> } | null } | null };

export type GetAllEventSlugsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllEventSlugsQuery = { __typename?: 'Query', eventCollection?: { __typename?: 'EventCollection', items: Array<{ __typename?: 'Event', slug?: string | null, startDate?: any | null } | null> } | null };

export type GetAllEventsQueryVariables = Exact<{
  locale: Scalars['String']['input'];
}>;


export type GetAllEventsQuery = { __typename?: 'Query', eventCollection?: { __typename?: 'EventCollection', items: Array<{ __typename?: 'Event', title?: string | null, slug?: string | null, startDate?: any | null, endDate?: any | null, image?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null } | null> } | null };

export type GetDJsQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetDJsQuery = { __typename?: 'Query', event?: { __typename?: 'Event', dJsCollection?: { __typename?: 'EventDJsCollection', items: Array<{ __typename?: 'Instructor', name?: string | null, pronouns?: string | null, sys: { __typename?: 'Sys', id: string }, biography?: { __typename?: 'InstructorBiography', json: any, links: { __typename?: 'InstructorBiographyLinks', assets: { __typename?: 'InstructorBiographyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, avatar?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | null> } | null } | null };

export type GetEventMetaDataQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetEventMetaDataQuery = { __typename?: 'Query', eventCollection?: { __typename?: 'EventCollection', items: Array<{ __typename?: 'Event', metadata?: { __typename?: 'PageMetadata', title?: string | null, description?: string | null, favicon?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, openGraphImage?: { __typename?: 'OpenGraphImage', image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | null } | null } | null> } | null };

export type GetEventPageQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetEventPageQuery = { __typename?: 'Query', eventCollection?: { __typename?: 'EventCollection', items: Array<{ __typename?: 'Event', title?: string | null, slug?: string | null, startDate?: any | null, endDate?: any | null, closedText?: string | null, registrationsOpened?: boolean | null, sys: { __typename?: 'Sys', id: string }, details?: { __typename?: 'EventDetails', json: any, links: { __typename?: 'EventDetailsLinks', assets: { __typename?: 'EventDetailsAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null, registrationLink?: { __typename?: 'Link', href?: string | null, text?: string | null } | null, socialMediaCollection?: { __typename?: 'EventSocialMediaCollection', items: Array<{ __typename?: 'Link', href?: string | null, text?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, levelRequirement?: { __typename?: 'LevelRequirement', title?: string | null, skills?: Array<string | null> | null, description?: { __typename?: 'LevelRequirementDescription', json: any, links: { __typename?: 'LevelRequirementDescriptionLinks', assets: { __typename?: 'LevelRequirementDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null, metadata?: { __typename?: 'PageMetadata', description?: string | null } | null, venuesCollection?: { __typename?: 'EventVenuesCollection', items: Array<{ __typename?: 'Venue', name?: string | null, venueAddress?: string | null } | null> } | null, instructorsCollection?: { __typename?: 'EventInstructorsCollection', items: Array<{ __typename?: 'Instructor', name?: string | null, avatar?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, dJsCollection?: { __typename?: 'EventDJsCollection', items: Array<{ __typename?: 'Instructor', name?: string | null, avatar?: { __typename?: 'Asset', url?: string | null } | null } | null> } | null, pricingCollection?: { __typename?: 'EventPricingCollection', items: Array<{ __typename?: 'Price', amount?: number | null, startTime?: any | null } | null> } | null } | null> } | null };

export type GetEventSlugQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
}>;


export type GetEventSlugQuery = { __typename?: 'Query', event?: { __typename?: 'Event', slug?: string | null } | null };

export type GetEventsSectionQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetEventsSectionQuery = { __typename?: 'Query', pageSection?: { __typename?: 'PageSection', title?: string | null, anchor?: string | null, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<
        | { __typename: 'Event', title?: string | null, dark?: boolean | null, tagline?: string | null, startDate?: any | null, slug?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null }
        | { __typename?: 'EventBlock' }
        | { __typename?: 'FeaturedSlide' }
        | { __typename?: 'Footer' }
        | { __typename?: 'Hero' }
        | { __typename?: 'Instructor' }
        | { __typename?: 'LandAcknowledgement' }
        | { __typename?: 'LevelRequirement' }
        | { __typename?: 'Link' }
        | { __typename?: 'Mission' }
        | { __typename?: 'OpenGraphImage' }
        | { __typename?: 'Page' }
        | { __typename?: 'PageMetadata' }
        | { __typename?: 'PageSection' }
        | { __typename?: 'Partners' }
        | { __typename?: 'Price' }
        | { __typename?: 'SocialMedia' }
        | { __typename?: 'StaticPage' }
        | { __typename?: 'Venue' }
       | null> } | null } | null };

export type GetFeaturedSlidesSectionQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetFeaturedSlidesSectionQuery = { __typename?: 'Query', pageSection?: { __typename?: 'PageSection', title?: string | null, anchor?: string | null, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<
        | { __typename?: 'Event' }
        | { __typename?: 'EventBlock' }
        | { __typename: 'FeaturedSlide', title?: string | null, type?: string | null, sys: { __typename?: 'Sys', id: string }, image?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, details?: { __typename?: 'FeaturedSlideDetails', json: any, links: { __typename?: 'FeaturedSlideDetailsLinks', assets: { __typename?: 'FeaturedSlideDetailsAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, link?: { __typename?: 'Link', href?: string | null, text?: string | null } | null }
        | { __typename?: 'Footer' }
        | { __typename?: 'Hero' }
        | { __typename?: 'Instructor' }
        | { __typename?: 'LandAcknowledgement' }
        | { __typename?: 'LevelRequirement' }
        | { __typename?: 'Link' }
        | { __typename?: 'Mission' }
        | { __typename?: 'OpenGraphImage' }
        | { __typename?: 'Page' }
        | { __typename?: 'PageMetadata' }
        | { __typename?: 'PageSection' }
        | { __typename?: 'Partners' }
        | { __typename?: 'Price' }
        | { __typename?: 'SocialMedia' }
        | { __typename?: 'StaticPage' }
        | { __typename?: 'Venue' }
       | null> } | null } | null };

export type GetHomePageQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetHomePageQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', slug?: string | null, hero?: { __typename?: 'Hero', title?: string | null, description?: { __typename?: 'HeroDescription', json: any, links: { __typename?: 'HeroDescriptionLinks', assets: { __typename?: 'HeroDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null, sys: { __typename?: 'Sys', id: string }, sectionsCollection?: { __typename?: 'PageSectionsCollection', items: Array<{ __typename?: 'PageSection', title?: string | null, anchor?: string | null, sectionName?: string | null, helpText?: string | null, sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'PageSectionContent', json: any, links: { __typename?: 'PageSectionContentLinks', assets: { __typename?: 'PageSectionContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null> } | null };

export type GetInstructorsQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetInstructorsQuery = { __typename?: 'Query', event?: { __typename?: 'Event', instructorsCollection?: { __typename?: 'EventInstructorsCollection', items: Array<{ __typename?: 'Instructor', name?: string | null, sys: { __typename?: 'Sys', id: string }, biography?: { __typename?: 'InstructorBiography', json: any, links: { __typename?: 'InstructorBiographyLinks', assets: { __typename?: 'InstructorBiographyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, avatar?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | null> } | null } | null };

export type GetMissionsSectionQueryVariables = Exact<{
  id: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetMissionsSectionQuery = { __typename?: 'Query', pageSection?: { __typename?: 'PageSection', title?: string | null, anchor?: string | null, componentsCollection?: { __typename?: 'PageSectionComponentsCollection', items: Array<
        | { __typename?: 'Event' }
        | { __typename?: 'EventBlock' }
        | { __typename?: 'FeaturedSlide' }
        | { __typename?: 'Footer' }
        | { __typename?: 'Hero' }
        | { __typename?: 'Instructor' }
        | { __typename?: 'LandAcknowledgement' }
        | { __typename?: 'LevelRequirement' }
        | { __typename?: 'Link' }
        | { __typename: 'Mission', title?: string | null, sys: { __typename?: 'Sys', id: string }, content?: { __typename?: 'MissionContent', json: any, links: { __typename?: 'MissionContentLinks', assets: { __typename?: 'MissionContentAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null }
        | { __typename?: 'OpenGraphImage' }
        | { __typename?: 'Page' }
        | { __typename?: 'PageMetadata' }
        | { __typename?: 'PageSection' }
        | { __typename?: 'Partners' }
        | { __typename?: 'Price' }
        | { __typename?: 'SocialMedia' }
        | { __typename?: 'StaticPage' }
        | { __typename?: 'Venue' }
       | null> } | null } | null };

export type GetPageFooterQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetPageFooterQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', footer?: { __typename?: 'Footer', copyright?: string | null, contact?: string | null, contactLink?: { __typename?: 'Link', href?: string | null, text?: string | null } | null, donateButton?: { __typename?: 'Link', href?: string | null, text?: string | null } | null, socialMediasCollection?: { __typename?: 'FooterSocialMediasCollection', items: Array<{ __typename?: 'SocialMedia', href?: string | null, accessibilityDescription?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null } | null> } | null, landAcknowledgement?: { __typename?: 'LandAcknowledgement', title?: string | null, text?: string | null } | null } | null } | null> } | null };

export type GetPageMetaDataQueryVariables = Exact<{
  locale: Scalars['String']['input'];
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type GetPageMetaDataQuery = { __typename?: 'Query', pageCollection?: { __typename?: 'PageCollection', items: Array<{ __typename?: 'Page', pageMetaData?: { __typename?: 'PageMetadata', title?: string | null, description?: string | null, favicon?: { __typename?: 'Asset', url?: string | null, title?: string | null } | null, openGraphImage?: { __typename?: 'OpenGraphImage', description?: string | null, image?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | null } | null } | null> } | null };

export type GetPartnersQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetPartnersQuery = { __typename?: 'Query', event?: { __typename?: 'Event', partnersCollection?: { __typename?: 'EventPartnersCollection', items: Array<{ __typename?: 'Partners', title?: string | null, link?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename?: 'Asset', title?: string | null, url?: string | null } | null } | null> } | null } | null };

export type GetPricingQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetPricingQuery = { __typename?: 'Query', event?: { __typename?: 'Event', pricingCollection?: { __typename?: 'EventPricingCollection', items: Array<{ __typename?: 'Price', tier?: string | null, type?: string | null, startTime?: any | null, endTime?: any | null, amount?: number | null, batch?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };

export type GetScheduleQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetScheduleQuery = { __typename?: 'Query', event?: { __typename?: 'Event', scheduleCollection?: { __typename?: 'EventScheduleCollection', items: Array<{ __typename?: 'EventBlock', title?: string | null, subtitle?: string | null, startTime?: any | null, endTime?: any | null, blockType?: string | null, sys: { __typename?: 'Sys', id: string }, description?: { __typename?: 'EventBlockDescription', json: any, links: { __typename?: 'EventBlockDescriptionLinks', assets: { __typename?: 'EventBlockDescriptionAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null } | null> } | null } | null };

export type GetStaticPageQueryVariables = Exact<{
  slug: Scalars['String']['input'];
  locale: Scalars['String']['input'];
  preview?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type GetStaticPageQuery = { __typename?: 'Query', staticPageCollection?: { __typename?: 'StaticPageCollection', items: Array<{ __typename?: 'StaticPage', title?: string | null, body?: { __typename?: 'StaticPageBody', json: any, links: { __typename?: 'StaticPageBodyLinks', assets: { __typename?: 'StaticPageBodyAssets', block: Array<{ __typename?: 'Asset', url?: string | null, description?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } } } | null, pageMetaData?: { __typename?: 'PageMetadata', title?: string | null, description?: string | null, openGraphImage?: { __typename?: 'OpenGraphImage', description?: string | null, image?: { __typename?: 'Asset', url?: string | null, title?: string | null, width?: number | null, height?: number | null } | null } | null, favicon?: { __typename?: 'Asset', url?: string | null } | null } | null } | null> } | null };

export type GetVenuesQueryVariables = Exact<{
  eventId: Scalars['String']['input'];
  locale: Scalars['String']['input'];
}>;


export type GetVenuesQuery = { __typename?: 'Query', event?: { __typename?: 'Event', venuesCollection?: { __typename?: 'EventVenuesCollection', items: Array<{ __typename?: 'Venue', name?: string | null, venueAddress?: string | null, purpose?: string | null, sys: { __typename?: 'Sys', id: string } } | null> } | null } | null };


export const GetAdministratorsSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAdministratorsSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Instructor"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pronouns"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAdministratorsSectionQuery, GetAdministratorsSectionQueryVariables>;
export const GetAllEventSlugsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllEventSlugs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllEventSlugsQuery, GetAllEventSlugsQueryVariables>;
export const GetAllEventsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllEvents"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"50"}},{"kind":"Argument","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"startDate_DESC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllEventsQuery, GetAllEventsQueryVariables>;
export const GetDJsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDJs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dJsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"pronouns"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetDJsQuery, GetDJsQueryVariables>;
export const GetEventMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"openGraphImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventMetaDataQuery, GetEventMetaDataQueryVariables>;
export const GetEventPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"eventCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"closedText"}},{"kind":"Field","name":{"kind":"Name","value":"registrationsOpened"}},{"kind":"Field","name":{"kind":"Name","value":"registrationLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"levelRequirement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"skills"}}]}},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"venuesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"venueAddress"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"instructorsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"dJsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pricingCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"20"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventPageQuery, GetEventPageQueryVariables>;
export const GetEventSlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventSlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]} as unknown as DocumentNode<GetEventSlugQuery, GetEventSlugQueryVariables>;
export const GetEventsSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetEventsSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Event"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"dark"}},{"kind":"Field","name":{"kind":"Name","value":"tagline"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetEventsSectionQuery, GetEventsSectionQueryVariables>;
export const GetFeaturedSlidesSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeaturedSlidesSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedSlide"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetFeaturedSlidesSectionQuery, GetFeaturedSlidesSectionQueryVariables>;
export const GetHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetHomePage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sectionsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"6"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PageSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"sectionName"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"helpText"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;
export const GetInstructorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetInstructors"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"instructorsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"biography"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"avatar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetInstructorsQuery, GetInstructorsQueryVariables>;
export const GetMissionsSectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetMissionsSection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageSection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"anchor"}},{"kind":"Field","name":{"kind":"Name","value":"componentsCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Mission"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetMissionsSectionQuery, GetMissionsSectionQueryVariables>;
export const GetPageFooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageFooter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"copyright"}},{"kind":"Field","name":{"kind":"Name","value":"contact"}},{"kind":"Field","name":{"kind":"Name","value":"contactLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"donateButton"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMediasCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"5"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"href"}},{"kind":"Field","name":{"kind":"Name","value":"accessibilityDescription"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"landAcknowledgement"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPageFooterQuery, GetPageFooterQueryVariables>;
export const GetPageMetaDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPageMetaData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"favicon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"openGraphImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPageMetaDataQuery, GetPageMetaDataQueryVariables>;
export const GetPartnersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPartners"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"partnersCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"link"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPartnersQuery, GetPartnersQueryVariables>;
export const GetPricingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetPricing"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pricingCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"tier"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"batch"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetPricingQuery, GetPricingQueryVariables>;
export const GetScheduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSchedule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"scheduleCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"description"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"startTime"}},{"kind":"Field","name":{"kind":"Name","value":"endTime"}},{"kind":"Field","name":{"kind":"Name","value":"blockType"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetScheduleQuery, GetScheduleQueryVariables>;
export const GetStaticPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStaticPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"preview"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"staticPageCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"preview"},"value":{"kind":"Variable","name":{"kind":"Name","value":"preview"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"body"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"block"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageMetaData"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"openGraphImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"favicon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetStaticPageQuery, GetStaticPageQueryVariables>;
export const GetVenuesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetVenues"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"event"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"eventId"}}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"venuesCollection"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"10"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sys"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"venueAddress"}},{"kind":"Field","name":{"kind":"Name","value":"purpose"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetVenuesQuery, GetVenuesQueryVariables>;