import { Api } from "./api";

interface ThumbnailHQ {
  hundred_fifty_square: string;
  three_hundred_square: string;
}

interface City {
  id: string;
  name: string;
}

interface Address {
  city_name: string;
  address_line_one: string;
  state_code: string;
  state_name: string;
  country_code: string;
  country_name: string;
  zip: string;
}

interface Geo {
  latitude: number;
  longitude: number;
}

interface Neighborhood {
  id: string;
  name: string;
}

interface HotelChain {
  id: number;
  group_id: number;
  name: string;
  code: number;
  chain_codes_b: string;
  chain_codes_t: string;
}

interface AmenityData {
  id: number;
  name: string;
}

interface ReviewScoreData {
  cleanliness_score: number;
}

interface PetFriendlyPlugin {
  plugin_id: string;
  plugin_name: string;
  hotelid_ppn: string;
  policy: string;
  policy_verified: string;
  enable: string;
  creation_date_time: string;
}

interface BenchmarkPriceDetails {
  saving_percentage: number;
  baseline_currency: string;
  baseline_price: number;
  source_currency: string;
  source_price: number;
  display_currency: string;
  display_price: number;
}

interface NightPriceData {
  baseline_night_price: number;
  source_night_price: number;
  display_night_price: number;
}

interface PriceDetails {
  baseline_currency: string;
  baseline_symbol: string;
  baseline_price: number;
  baseline_property_fee: number;
  baseline_insurance_fee: number;
  baseline_sub_total: number;
  baseline_taxes: number;
  baseline_total: number;
  source_currency: string;
  source_symbol: string;
  source_price: number;
  source_property_fee: number;
  source_insurance_fee: number;
  source_sub_total: number;
  source_taxes: number;
  source_total: number;
  display_currency: string;
  display_symbol: string;
  display_price: number;
  display_property_fee: number;
  display_insurance_fee: number;
  display_sub_total: number;
  display_taxes: number;
  display_total: number;
  mandatory_fee_details: string; // Type to be defined
  night_price_data: NightPriceData[];
  nightly_rate_changes: boolean;
  promo: string; // Type to be defined
}

interface CancellationDetails {
  description: string;
  date_after: string;
  date_before: string;
  penalty_nights: number;
  source_currency: string;
  source_amount: number;
  source_tax: number;
  source_processing_fee: number;
  source_cancellation_fee: number;
  source_refund: number;
  source_total_charges: number;
  display_currency: string;
  display_amount: number;
  display_tax: number;
  display_processing_fee: number;
  display_cancellation_fee: number;
  display_refund: number;
  display_total_charges: number;
}

interface RateData {
  source: string;
  rate_type: string;
  commission_type: string;
  distribution_type: string;
  payment_type: string;
  board_type: string;
  inventory_type: string;
  program_types: string[]; // Type to be defined
  occupancy_limit: number;
  available_rooms: number;
  ppn_bundle: string;
  rate_plan_code: string;
  rate_tracking_id: string;
  benchmark_price_details: BenchmarkPriceDetails;
  price_details: PriceDetails;
  cancellation_details: CancellationDetails[];
  policy_data: []; // Type to be defined
  upsell_data: string; // Type to be defined
  refund_type: string;
  cvc_required: boolean;
  deposit_required: string; // Type to be defined
  rate_amenity_data: []; // Type to be defined
  language: string;
}

interface RoomData {
  id: string;
  title: string;
  description: string;
  room_square_footage: number | null;
  rate_data: RateData[];
}

interface HotelData {
  id: string;
  id_t: string;
  property_type_id: number;
  name: string;
  hotel_description: string;
  star_rating: number;
  review_rating: number;
  review_rating_desc: string;
  thumbnail: string;
  thumbnail_hq: ThumbnailHQ;
  city: City;
  address: Address;
  geo: Geo;
  neighborhood: Neighborhood;
  hotel_chain: HotelChain;
  amenity_data: AmenityData[];
  review_score_data: ReviewScoreData;
  check_in_information: { standard_check_in: boolean };
  plugin_data: { pet_friendly: PetFriendlyPlugin };
  room_data: RoomData[];
}

class Hotel {

  constructor(public data: HotelData) {}

  // Add getter methods as needed
  getId(): string {
      return this.data.id;
  }

  getName(): string {
      return this.data.name;
  }

  static get_all = async () => {
    const  hotels: Hotel[] = [];

    await Api.get("hotels").then(res => {

      res.data.forEach((hotel: HotelData) => {
        hotels.push(new Hotel(hotel));
      });

    });

    return hotels;
  }

  static get_one = async (id: string) => {
    const hotel: HotelData = await Api.get(`hotels/${id}`).then(res => res.data);
    console.log(hotel);
    return new Hotel(hotel);
  }

}

export default Hotel;
