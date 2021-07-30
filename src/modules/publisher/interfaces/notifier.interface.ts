import ObjectLiteral from '../../../common/interfaces/object-literal.interface';

export interface INotifySubscriber {
  topic: string;
  data: ObjectLiteral;
  urls: string[];
}
