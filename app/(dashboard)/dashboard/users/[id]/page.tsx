const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <div>UserDetails N{id}</div>;
};

export default UserDetails;
