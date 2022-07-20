const convertToCorporation = (d) => ({
  addressImageId: d.addressImageId == null || d.addressImageId === '' ? null : d.addressImageId,
  addressOutside: d.addressOutside == null || d.addressOutside === '' ? null : d.addressOutside,
  addressOutsideImageId: d.addressOutsideImageId == null || d.addressOutsideImageId === '' ? null : d.addressOutsideImageId,
  assignmentDate: d.assignmentDate == null || d.assignmentDate === '' ? null : d.assignmentDate,
  changeCause: d.changeCause == null || d.changeCause === '' ? null : d.changeCause,
  changeDate: d.changeDate == null || d.changeDate === '' ? null : d.changeDate,
  cityCode: d.cityCode == null || d.cityCode === '' ? null : d.cityCode,
  cityName: d.cityName == null || d.cityName === '' ? null : d.cityName,
  closeCause: d.closeCause == null || d.closeCause === '' ? null : d.closeCause,
  closeDate: d.closeDate == null || d.closeDate === '' ? null : d.closeDate,
  corporateNumber: d.corporateNumber,
  correct: d.correct == null || d.correct === '' ? null : d.correct,
  enAddressOutside: d.enAddressOutside == null || d.enAddressOutside === '' ? null : d.enAddressOutside,
  enCityName: d.enCityName == null || d.enCityName === '' ? null : d.enCityName,
  enName: d.enName == null || d.enName === '' ? null : d.enName,
  enPrefectureName: d.enPrefectureName == null || d.enPrefectureName === '' ? null : d.enPrefectureName,
  furigana: d.furigana == null || d.furigana === '' ? null : d.furigana,
  hihyoji: d.hihyoji == null || d.hihyoji === '' ? null : d.hihyoji,
  kind: d.kind == null || d.kind === '' ? null : d.kind,
  latest: d.latest == null || d.latest === '' ? null : d.latest,
  name: d.name == null || d.name === '' ? null : d.name,
  nameImageId: d.nameImageId == null || d.nameImageId === '' ? null : d.nameImageId,
  prefectureName: d.prefectureName == null || d.prefectureName === '' ? null : d.prefectureName,
  process: d.process,
  prefectureCode: d.prefectureCode == null || d.prefectureCode === '' ? null : d.prefectureCode,
  postCode: d.postCode == null || d.postCode === '' ? null : d.postCode,
  sequenceNumber: d.sequenceNumber,
  streetNumber: d.streetNumber == null || d.streetNumber === '' ? null : d.streetNumber,
  successorCorporateNumber: d.successorCorporateNumber == null || d.successorCorporateNumber === '' ? null : d.successorCorporateNumber,
  updateDate: d.updateDate
})

const convertToCorporations = (d) => ({
  count: d.count,
  corporation: d.corporation == null ? null : Array.isArray(d.corporation) ? d.corporation.map(convertToCorporation) : convertToCorporation(d.corporation),
  divideNumber: d.divideNumber,
  divideSize: d.divideSize,
  lastUpdateDate: d.lastUpdateDate
})

module.exports.convertToCorporations = convertToCorporations
