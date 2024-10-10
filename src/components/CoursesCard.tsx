import { SpriteIcon } from '@components/common/SpriteIcon';
import { SpritesCategories, Stacks } from '@enums';
import { NavLink } from '@components/NavLink';
import Button from '@components/common/Button';
import Image from 'next/image';

type CoursesCardProps = {
  course: {
    href:string;
    imgSrc:string;
    repoLink?: string;
    title: string;
    notes?: string;
    description: string;
    certificate?: string;
  };
};



export default function CoursesCard({
  course: { title, description, repoLink, notes, href, imgSrc, certificate  },
}: CoursesCardProps) {
  return (
    <article className="rounded gap-5 p-5 items-center border dark:border-brand-secondary-700 shadow">
     <section className='flex gap-5'>
     <section className="w-full basis-1/4 content-center">
        <Image
          src={imgSrc}
          alt={title}
          width={900}
          height={900}
          className='rounded-xl'
        />
      </section>
      <section className="flex flex-col gap-4 h-full w-full">
        <NavLink
          href={href}
          newTab
          className="flex flex-col gap-3 transition rounded-2xl p-5 hover:bg-brand-secondary-200 dark:hover:bg-brand-secondary-700"
          >
            <h1 className="text-2xl tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl font-light ">
              {title}
            </h1>
            <p className="text-brand-secondary-300 dark:text-brand-secondary-300 text-sm text-justify">
              {description}
            </p>
            <p className="text-brand-primary items-center justify-end flex gap-2">
                    <span>Go to course</span>
                    <SpriteIcon
                      category={SpritesCategories.CHEVRON}
                      name="right"
                      size="sm"
                      title="menu"
                    />
                  </p>

        </NavLink>
       
      
      </section>

     </section>
  

      <footer className="flex justify-end gap-5 mt-auto pr-5 pt-2  text-brand-primary ">
      {notes && 
      <NavLink
      href={notes}
      newTab
    >
      <SpriteIcon
        category={SpritesCategories.COMMON}
        name="notes"
        size="xl"
        title="notes"
      />
    </NavLink> }
      {repoLink && 
       <NavLink href={repoLink} newTab>
       <SpriteIcon
         category={SpritesCategories.SOCIAL}
         name="github"
         title="github"
         size="xl"
       />
     </NavLink> }
      
         
          {certificate &&  
           <NavLink href={certificate} newTab>
           <SpriteIcon
             category={SpritesCategories.COMMON}
             name="certificate"
             title="certificate"
             size="xl"
           />
         </NavLink>
          
          }
        </footer>
    
    </article>
  );
}
