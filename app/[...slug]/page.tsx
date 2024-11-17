export default async function Page(props: {
    params: Promise<{
      slug: string,
    }>;
}){
    const { slug } = await props.params;

    console.log(slug);

    return <h1>Category</h1>
}