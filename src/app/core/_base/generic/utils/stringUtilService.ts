export class StringUtilService {
  public static firstCharacterToUpperCase(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
