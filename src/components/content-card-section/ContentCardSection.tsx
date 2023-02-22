import { BottonContentCard } from './BottonContentCard';
import { SearchBar } from './particular/SearchBar';
import { TopContentCard } from './TopContentCard';

export const ContentCardSection: React.FC = () => {
  return (
    <section className='relative mt-36 md:mt-0'>
      <TopContentCard></TopContentCard>
      <SearchBar></SearchBar>
      <BottonContentCard></BottonContentCard>
    </section>
  );
};
