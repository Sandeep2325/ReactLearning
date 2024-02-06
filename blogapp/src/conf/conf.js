const conf = {
    appwriteUrl: String(process.Env.REACT_APP_APPWRITE_URL),
    appwriteProjectId: String(process.Env.REACT_APP_APPWRITE_PROJECT_ID),
    appwriteDatabaseId: String(process.Env.REACT_APP_APPWRITE_DATABASE_ID),
    appwriteCollectionId: String(process.Env.REACT_APP_APPWRITE_COLLECTION_ID),
    appwriteBucketId: String(process.Env.REACT_APP_APPWRITE_BUCKET_ID)
}
export default conf