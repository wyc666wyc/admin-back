import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm'
import { CreateSourceDto } from './dto/create-source.dto';
import { UpdateSourceDto } from './dto/update-source.dto';
import { Source } from './entities/source.entity'
import { axios } from '../common/request/axios'
import { getSign, randomString } from '../common/utils/sdk'

@Injectable()
export class SourceService {

  // constructor(
  //   @InjectRepository(Source)
  //   private readonly sourceEntity: Repository<Source>,
  // ) {}

  // create(source: Partial<Source>) {
  //   const { username, password } = source
  //   return this.sourceEntity.save(source)
  // }

  carbon() {
    const requestParams = {
      exchangeCn: "全国",
      transactionType: "线上交易",
      beginTime: "2023-05-12",
      endTime: "2023-06-12",
      pageNum: 0,
      pageSize: 30
    }
    const url = "https://api.sinocarbon.cn/dp/opendata"
    const path = "/services/cp/allowance/transaction/china/baosight"
    const appId = "2wOv6yxP46pZURhX3UQS0f"
    const apiSecret = "0dN7bVV00WicDeKI1QsOvK"
    const apiKey = "3SrUjGqLrTvJPZs74iABHW"
    const nonce = randomString(16)
    const timestamp = new Date().getTime()
    const sign = getSign(requestParams, apiKey, timestamp, path, apiSecret, nonce)
    return axios.post(url + path, JSON.stringify(requestParams), {
      headers: {
        appId,
        sign,
        timestamp,
        apiKey,
        apiSecret,
        nonce
      }
    })
  }

  findAll() {
    return `This action returns all source`;
  }

  findOne(id: number) {
    return `This action returns a #${id} source`;
  }

  update(id: number, updateSourceDto: UpdateSourceDto) {
    return `This action updates a #${id} source`;
  }

  remove(id: number) {
    return `This action removes a #${id} source`;
  }
}
