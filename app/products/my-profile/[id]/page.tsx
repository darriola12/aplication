import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { getUserInfo} from '@/app/lib/data';

 
export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const [userdata] = await Promise.all([
        getUserInfo(id),
      ]);
  
  return (
    <main>
        <Breadcrumbs
                breadcrumbs={[
                  { label: 'Invoices', href: '/products' },
                  {
                    label: 'Edit Invoice',
                    href: `/products/my-profile/${id}`,
                    active: true,
                  },
                ]}
              />

        <div>
            <label >Nombre</label>
            <input type="text" name="name" id="name" defaultValue={userdata.name} />
        </div>
      
      
    </main>
  );
}