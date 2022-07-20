const convertToCorporation = (d) => ({
  addressImageId: d.addressImageId == null || d.addressImageId !== '' ? d.addressImageId : null,
  addressOutside: d.addressOutside,
  addressOutsideImageId: d.addressOutsideImageId,
  assignmentDate: d.assignmentDate,
  changeCause: d.changeCause,
  changeDate: d.changeDate,
  cityCode: d.cityCode,
  cityName: d.cityName,
  closeCause: d.closeCause,
  closeDate: d.closeDate,
  corporateNumber: d.corporateNumber,
  correct: d.correct,
  enName: d.enName,
  enPrefectureName: d.enPrefectureName,
  enCityName: d.enCityName,
  enAddressOutside: d.enAddressOutside,
  furigana: d.furigana,
  hihyoji: d.hihyoji,
  kind: d.kind,
  latest: d.latest,
  name: d.name,
  nameImageId: d.nameImageId,
  prefectureName: d.prefectureName,
  process: d.process,
  prefectureCode: d.prefectureCode,
  postCode: d.postCode,
  sequenceNumber: d.sequenceNumber,
  streetNumber: d.streetNumber,
  successorCorporateNumber: d.successorCorporateNumber,
  updateDate: d.updateDate
})

const convertToCorporations = (d) => ({
  count: d.count,
  corporation: Array.isArray(d.corporation) ? d.corporation.map(convertToCorporation) : convertToCorporation(d.corporation),
  divideNumber: d.divideNumber,
  divideSize: d.divideSize,
  lastUpdateDate: d.lastUpdateDate
})

module.exports.convertToCorporations = convertToCorporations
