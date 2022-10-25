import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SearchInputContainer, SearchInputHeader } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInput = z.infer<typeof searchFormSchema>

export function SearchInput() {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  function handleSearchPosts(data: SearchFormInput) {
    console.log(data)
  }

  return (
    <SearchInputContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <SearchInputHeader>
        <p>Publicações</p>
        <p>6 publicações</p>
      </SearchInputHeader>

      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchInputContainer>
  )
}
