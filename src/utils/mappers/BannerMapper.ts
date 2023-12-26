import { QueryHome_banners_data as BannerMapperProps } from 'graphql/__genereted__/QueryHome'

class BannerMapper {
  toDomain(persistenceBanners: BannerMapperProps[] | undefined) {
    return persistenceBanners?.map((banner) => ({
      img: `http://localhost:1337${banner.attributes?.image.data?.attributes?.url}`,
      title: banner.attributes?.title,
      subtitle: banner.attributes?.subtitle,
      buttonLabel: banner.attributes?.button?.label,
      buttonLink: banner.attributes?.button?.link,
      ...(banner.attributes?.ribbon && {
        ribbon: banner.attributes?.ribbon?.text,
        ribbonColor: banner.attributes?.ribbon?.color,
        ribbonSize: banner.attributes?.ribbon?.size
      })
    }))
  }
}

export default new BannerMapper()
